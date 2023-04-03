import { t, publicProcedure } from "./helpers/createRouter";
import { ReceiptAggregateSchema } from "../schemas/aggregateReceipt.schema";
import { ReceiptCreateOneSchema } from "../schemas/createOneReceipt.schema";
import { ReceiptDeleteOneSchema } from "../schemas/deleteOneReceipt.schema";
import { ReceiptFindManySchema } from "../schemas/findManyReceipt.schema";
import { ReceiptFindUniqueSchema } from "../schemas/findUniqueReceipt.schema";

export const receiptsRouter = t.router({
  aggregateReceipt: publicProcedure
    .input(ReceiptAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateReceipt = await ctx.prisma.receipt.aggregate(input);
      return aggregateReceipt;
    }),
  createOneReceipt: publicProcedure
    .input(ReceiptCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneReceipt = await ctx.prisma.receipt.create(input);
      return createOneReceipt;
    }),
  deleteOneReceipt: publicProcedure
    .input(ReceiptDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneReceipt = await ctx.prisma.receipt.delete(input);
      return deleteOneReceipt;
    }),
  findManyReceipt: publicProcedure
    .input(ReceiptFindManySchema).query(async ({ ctx, input }) => {
      const findManyReceipt = await ctx.prisma.receipt.findMany(input);
      return findManyReceipt;
    }),
  findUniqueReceipt: publicProcedure
    .input(ReceiptFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueReceipt = await ctx.prisma.receipt.findUnique(input);
      return findUniqueReceipt;
    }),

}) 
