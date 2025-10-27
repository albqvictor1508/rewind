import express from "express"
import { env } from "./common/env";
import chalk from "chalk"
import { userRoutes } from "./modules/users";
import { authRoutes } from "./modules/auth";
import { healthRoute } from "./modules/health";
import cors from "cors"

export let readyNum = 0;
export const app = express();

app.use(express.json())
app.use(cors({ origin: "http://localhost:5173" }))

app.use(userRoutes);
app.use(authRoutes);
app.use(healthRoute);

app.listen(env.PORT, () => {
  readyNum = Date.now();
  console.log(chalk.redBright(`Movies API running on ${env.PORT}`))
})
