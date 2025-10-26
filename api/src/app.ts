import express from "express"
import { env } from "./common/env";
import chalk from "chalk"
import { userRoutes } from "./modules/users";
import { healthRoute } from "./modules/health";

export let readyNum = 0;
export const app = express();

app.use(express.json())
app.use(userRoutes);
app.use(healthRoute)

app.listen(env.PORT, () => {
  readyNum = Date.now();
  console.log(chalk.redBright(`Movies API running on ${env.PORT}`))
})
