import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.status(200).send("user router is working");
});

export default userRouter;
