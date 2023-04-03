import { t, publicProcedure } from "./helpers/createRouter";
import { UserAggregateSchema } from "../schemas/aggregateUser.schema";
import { UserCreateOneSchema } from "../schemas/createOneUser.schema";
import { UserDeleteOneSchema } from "../schemas/deleteOneUser.schema";
import { UserFindManySchema } from "../schemas/findManyUser.schema";
import { UserFindUniqueSchema } from "../schemas/findUniqueUser.schema";

export const usersRouter = t.router({
  aggregateUser: publicProcedure
    .input(UserAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateUser = await ctx.prisma.user.aggregate(input);
      return aggregateUser;
    }),
  createOneUser: publicProcedure
    .input(UserCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneUser = await ctx.prisma.user.create(input);
      return createOneUser;
    }),
  deleteOneUser: publicProcedure
    .input(UserDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneUser = await ctx.prisma.user.delete(input);
      return deleteOneUser;
    }),
  findManyUser: publicProcedure
    .input(UserFindManySchema).query(async ({ ctx, input }) => {
      const findManyUser = await ctx.prisma.user.findMany(input);
      return findManyUser;
    }),
  findUniqueUser: publicProcedure
    .input(UserFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueUser = await ctx.prisma.user.findUnique(input);
      return findUniqueUser;
    }),

}) 