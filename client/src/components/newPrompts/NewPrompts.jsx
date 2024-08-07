import React, { useEffect, useRef, useState } from "react";
import "./newPrompts.css";
import Upload from "../upload/Upload";
import { IKImage } from "imagekitio-react";
import model from "../../lib/gemini";
import Markdown from "react-markdown";

const NewPrompts = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
    aiData: {},
  });
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [question, answer, img.dbData]);

  const add = async (text) => {
    setQuestion(text);

    try {
      const inputData = Object.entries(img?.aiData).length
        ? [img?.aiData, text]
        : [text];

      console.log("Sending data to model:", inputData);

      const result = await model.generateContent(inputData);
      const response = await result.response;
      const responseText = await response.text();

      setAnswer(responseText);
      setImg({
        isLoading: false,
        error: "",
        dbData: {},
        aiData: {}
      })
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;
    add(text);
  };

  const imageSrc = img.dbData?.filePath
    ? `${import.meta.env.VITE_IMAGE_KIT_ENDPOINT}/${img.dbData.filePath}`
    : null;

  return (
    <>
      {img.isLoading && <div>Loading...</div>}
      {imageSrc && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData?.filePath}
          width="380"
          transformation={[{ width: "380" }]}
        />
      )}
      {question && <div className="message user">{question}</div>}
      {answer && (
        <div className="message">
          <Markdown>{answer}</Markdown>
        </div>
      )}
      <div className="endChat" ref={endRef}></div>
      <form className="newForm" onSubmit={handleSubmit}>
        <Upload setImg={setImg} />
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" name="text" placeholder="Ask anything...." />
        <button>
          <img src="/arrow.png" alt="Submit" />
        </button>
      </form>
    </>
  );
};

export default NewPrompts;
