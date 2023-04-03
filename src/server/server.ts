import {TRPC_API_ENDPOINT} from '../utils/constants';
import * as trpcExpress from '@trpc/server/adapters/express';
import {appRouter} from './prisma/routers';
import {createContext} from './context/context';

const express = require('express');
const app = express();

app.use(
  TRPC_API_ENDPOINT,
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);
