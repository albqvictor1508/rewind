import { Router } from "express";
import { auth } from "src/config/auth";

export const movieRoutes = Router();

movieRoutes.get(
  "/",
  auth.authenticate,
  async (request, reply) => {

  }
)
