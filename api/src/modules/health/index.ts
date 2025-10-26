import { Router } from "express";
import { HealthService } from "./service";

export const healthRoute = Router();
healthRoute.get(
  "/health",
  async (_, response) => {
    const health = await HealthService.check();
    if (!health.ok) return response.status(500).json(health)

    return response.status(200).json(health);
  },
);
