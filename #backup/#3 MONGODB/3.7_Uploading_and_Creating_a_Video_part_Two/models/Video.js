import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    //File URL이 없을때의 error 메시지
    required: "File URL id required",
  },
  title: {
    type: String,
    //Title이 없을때의 error 메시지
    required: "Title is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    //현재날짜
    default: Date.now,
  },
  commnets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      //ObjectId가 어느 model에서 왔는지
      ref: "Comment",
    },
  ],
});

const model = mongoose.model("Video", VideoSchema);

export default model;
