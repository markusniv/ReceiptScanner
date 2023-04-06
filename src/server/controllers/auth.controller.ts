import * as trpc from '@trpc/server';
import bcrypt from 'bcryptjs';
import {Context} from '../context/context';
import jwt from 'jsonwebtoken';
import {ACCESS_SECRET_KEY, ERROR} from '../../utils/constants';
export default class AuthController {
  async signupUser(ctx: Context, input: {username: string; password: string}) {
    try {
      const {username, password} = input;
      const hashedPassword = await bcrypt.hash(password, 10);
      const noUsername = username === '';
      const noPassword = password === '';

      if (noUsername || noPassword) {
        return {
          code: ERROR,
          message: 'Please fill all fields',
        };
      }

      // Check if user already exists
      const user_exist = await ctx.prisma.user.findUnique({
        where: {
          username,
        },
      });

      if (user_exist) {
        return {
          code: ERROR,
          message: 'Username already exists',
        };
      }

      const user = await ctx.prisma.user.create({
        data: {
          username,
          password: hashedPassword,
        },
      });

      const accessToken = jwt.sign(
        {id: user.id, username: user.username, role: user.role},
        ACCESS_SECRET_KEY,
      );

      return {
        message: 'Signup Successful, logging in.',
        status: 'success',
        user,
        accessToken,
      };
    } catch (error: any) {
      throw new trpc.TRPCError(error);
    }
  }

  async loginUser(ctx: Context, input: {username: string; password: string}) {
    try {
      const {username, password} = input;
      const noUsername = username === '';
      const noPassword = password === '';

      if (noUsername || noPassword) {
        return {
          code: ERROR,
          message: 'Please fill all fields',
        };
      }

      const user = await ctx.prisma.user.findUnique({
        where: {username},
      });

      const passwordMatch = await bcrypt.compare(
        password,
        (user as Record<string, any>).password,
      );

      if (!user || !passwordMatch) {
        return {
          code: ERROR,
          message: 'Username or password wrong!',
        };
      }

      const accessToken = jwt.sign(
        {id: user.id, username: user.username, role: user.role},
        ACCESS_SECRET_KEY,
      );

      return {
        accessToken,
        user,
        message: 'Login successful',
        status: 'success',
      };
    } catch (error: any) {
      return {
        code: ERROR,
        message: 'Username or password wrong!',
      };
    }
  }
}
