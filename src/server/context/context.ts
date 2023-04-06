import {PrismaClient} from '@prisma/client';
import {inferAsyncReturnType} from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

const prisma = new PrismaClient();

export async function createContext({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) {
  return {req, res, prisma};
}
export type Context = inferAsyncReturnType<typeof createContext>;
