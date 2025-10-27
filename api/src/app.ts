import express from "express"
import { env } from "./common/env";
import chalk from "chalk"
import { userRoutes } from "./modules/users";
import { authRoutes } from "./modules/auth";
import { healthRoute } from "./modules/health";
import cors from "cors"
import cookieParser from "cookie-parser"
import { movieRoutes } from "./modules/movies";
import { auth } from "express-openid-connect"

export let readyNum = 0;
export const app = express();

const {
  SECRET,
  PORT,
  AUTH0_DOMAIN,
  AUTH0_CLIENT_ID,
} = env;

app.use(express.json())
app.use(cors({ origin: "http://localhost:5173" }))
app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    secret: SECRET,
    clientID: AUTH0_CLIENT_ID,
    baseURL: `http://localhost:${PORT}`,
    issuerBaseURL: AUTH0_DOMAIN
  })
)

app.use(cookieParser())

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/movies", movieRoutes);
app.use(healthRoute);

app.listen(PORT, () => {
  readyNum = Date.now();
  console.log(chalk.redBright(`Rewind API running on ${env.PORT}`))
})
