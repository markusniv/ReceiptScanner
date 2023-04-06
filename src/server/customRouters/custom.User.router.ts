import {publicProcedure, t} from '../prisma/routers/helpers/createRouter';
import {z} from 'zod';

export const customUserRouter = t.router({
  findMany: publicProcedure.query(async ({ctx}) => {
    return await ctx.prisma.user.findMany();
  }),
});
