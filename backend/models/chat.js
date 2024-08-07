import mongoose from "mongoose";

const userChatSchema = new mongoose.Schema({
  userId: {
    type: String,
    requried: true,
  },
  chats: [
    {
      _id: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
      
    },
  ],
},{timeStamps: true});

export default mongoose.models.userChats || mongoose.model("userChats", userChatSchema)
