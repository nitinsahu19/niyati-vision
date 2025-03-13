import express from "express";
import connectDB from "./lib/connectDB.js";
import postRouter from "./routes/post.route.js";
import userRouter from "./routes/user.route.js";
import commentRouter from "./routes/comment.route.js";

const app = express();
connectDB();

app.use("/posts", postRouter);
app.use("/users", userRouter);
app.use("/comments", commentRouter);

app.listen(3000, () => console.log("Server is running!"));
