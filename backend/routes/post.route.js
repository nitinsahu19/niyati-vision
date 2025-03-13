import express from "express";
import Post from "../models/post.model.js";

const postRouter = express.Router();

postRouter.get("/", async (req, res) => {
  const posts = await Post.find();
  res.status(200).send(posts);
});

export default postRouter;
