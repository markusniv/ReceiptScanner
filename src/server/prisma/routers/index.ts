import { t } from "./helpers/createRouter";
import { usersRouter } from "./User.router";
import { receiptsRouter } from "./Receipt.router";

export const appRouter = t.router({
  user: usersRouter,
  receipt: receiptsRouter
})

