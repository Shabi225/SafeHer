import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes";

const app = express();

app.use(
  cors({
    origin: "*"
  })
);

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Welcome to SafeHer API"
  });
});

app.use("/api/health", healthRoutes);

export default app;