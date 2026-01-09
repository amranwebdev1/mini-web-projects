import express from "express";
import connectDB from "./db.js";
import UserRouter from "./Router/user.router.js";
import cors from "cors";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connect
connectDB()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB connection error:", err));

// routes
app.use("/user", UserRouter);

app.get("/", (req, res) => {
  res.send("Hi, I am Amran");
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// 500 error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Server error", message: err.message });
});

export default app;