import React, { useEffect, useRef } from 'react';
import "./newPrompts.css";

const NewPrompts = () => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({behavior: "smooth"})
  },[])
  return (
    <>
    <div className="endChat" ref={endRef}></div>
        <div className="newForm">
            <label htmlFor="file">
              <img src="/attachment.png" alt="" />
            </label>
            <input id='file' type="file" multiple={false} hidden/>
            <input type="text" placeholder='Ask anything....' />
            <button>
                <img src="/arrow.png" alt="" />
            </button>
        </div>
    </>
  )
}

export default NewPrompts