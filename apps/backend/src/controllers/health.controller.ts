import type { Request, Response } from "express";

export function getHealth(
  _req: Request,
  res: Response
): void {
  res.status(200).json({
    success: true,
    message: "SafeHer backend is running",
    timestamp: new Date().toISOString()
  });
}