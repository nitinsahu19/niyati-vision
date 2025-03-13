import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    post: { type: Schema.Types.ObjectId, required: true, ref: "Post" },
    
  },
  { timestamps: true }
);

export default mongoose.model("User", commentSchema);
