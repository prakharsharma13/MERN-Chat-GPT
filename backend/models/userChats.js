import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  userId: {
    type: String,
    requried: true,
  },
  history: [
    {
      role: {
        type: String,
        enum: ["user", "model"],
        required: true,
      },
      parts: [
        {
          text: {
            type: String,
            required: true,
          },
        },
      ],
      img: {
        type: String,
        required: false,
      },
    },
  ],
},{timeStamps: true});

export default mongoose.models.chat || mongoose.model("chat", chatSchema)
