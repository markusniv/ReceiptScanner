import {PrismaClient} from '@prisma/client';
import {inferAsyncReturnType} from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

const prisma = new PrismaClient();
export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({prisma}); // no context
export type Context = inferAsyncReturnType<typeof createContext>;
