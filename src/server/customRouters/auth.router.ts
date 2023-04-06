import {publicProcedure, t} from '../prisma/routers/helpers/createRouter';
import {number, string, z} from 'zod';
import jwt from 'jsonwebtoken';
import AuthController from '../controllers/auth.controller';
import {ACCESS_SECRET_KEY} from '../../utils/constants';
import {SessionState} from '../../utils/enums';

export const authRouter = t.router({
  authentication: publicProcedure
    .input(
      z.object({
        id: number(),
        accessToken: string(),
      }),
    )
    .mutation(async ({ctx, input}) => {
      let sessionState = SessionState.FAILED;

      try {
        const response = jwt.verify(
          input.accessToken,
          ACCESS_SECRET_KEY,
        ) as jwt.JwtPayload;

        if (response.id === input.id) {
          sessionState = SessionState.SUCCESS;
        }
        return {sessionState, token: response};
      } catch (error: any) {
        console.error(error);
      }
    }),
  login: publicProcedure
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
      }),
    )
    .mutation(async ({ctx, input}) => {
      return await new AuthController().loginUser(ctx, input);
    }),
  register: publicProcedure
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
      }),
    )
    .mutation(async ({ctx, input}) => {
      return await new AuthController().signupUser(ctx, input);
    }),
});
