import express from "express";
import {
  getPost,
  getPosts,
  createPost,
  deletePost,
} from "../controllers/post.controller.js";

const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.get("/:slug", getPost);
postRouter.post("/", createPost);
postRouter.delete("/:id", deletePost);

export default postRouter;
