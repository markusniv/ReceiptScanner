import {t} from './helpers/createRouter';
import {usersRouter} from './User.router';
import {receiptsRouter} from './Receipt.router';
import {authRouter} from '../../customRouters/auth.router';
import {customUserRouter} from '../../customRouters/custom.User.router';
import {customReceiptRouter} from '../../customRouters/custom.Receipt.router';

export const appRouter = t.router({
  auth: authRouter,
  user: usersRouter,
  customUser: customUserRouter,
  customReceipt: customReceiptRouter,
  receipt: receiptsRouter,
});
