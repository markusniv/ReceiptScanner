import {publicProcedure, t} from '../prisma/routers/helpers/createRouter';
import {z} from 'zod';
import jwt from 'jsonwebtoken';
import {ACCESS_SECRET_KEY} from '../../utils/constants';
import {Role, Status} from '@prisma/client';

export const customReceiptRouter = t.router({
  findAllReceipts: publicProcedure.query(async ({ctx}) => {
    return await ctx.prisma.receipt.findMany();
  }),
  findUserReceipts: publicProcedure
    .input(z.number())
    .query(async ({ctx, input}) => {
      return await ctx.prisma.receipt.findMany({
        where: {
          userId: input,
        },
      });
    }),
  createOneReceipt: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        amount: z.number(),
        userId: z.number(),
      }),
    )
    .mutation(async ({ctx, input}) => {
      const createOneReceipt = await ctx.prisma.receipt.create({data: input});
      return createOneReceipt;
    }),
  closeReceipt: publicProcedure
    .input(
      z.object({
        receiptId: z.number(),
        accessKey: z.string(),
      }),
    )
    .mutation(async ({ctx, input}) => {
      const response = jwt.verify(
        input.accessKey,
        ACCESS_SECRET_KEY,
      ) as jwt.JwtPayload;

      const checkedUser = await ctx.prisma.user.findUnique({
        where: {
          id: response.id,
        },
      });

      if (checkedUser?.role === Role.ADMIN) {
        const closeReceipt = await ctx.prisma.receipt.update({
          where: {id: input.receiptId},
          data: {status: Status.CLOSED},
        });
        return closeReceipt;
      }
      return {
        status: 'ERROR',
        message: 'Not an admin',
      };
    }),
});
