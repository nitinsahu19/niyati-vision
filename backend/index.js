import express from "express";
import connectDB from "./lib/connectDB.js";
import postRouter from "./routes/post.route.js";
import userRouter from "./routes/user.route.js";
import commentRouter from "./routes/comment.route.js";

const app = express();
connectDB();
app.use(express.json());

app.use("/posts", postRouter);
app.use("/users", userRouter);
app.use("/comments", commentRouter);

// Error handler
app.use((error, req, res, next) => {
  const statusCode = error.status || 500;

  res.status(statusCode).json({
    message: error.message || "Something went wrong!",
    status: statusCode,
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });
});

app.listen(3000, () => console.log("Server is running!"));
