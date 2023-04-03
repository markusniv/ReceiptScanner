import {z} from 'zod';
import {RoleSchema} from '../enums/Role.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutReceiptsInput> = z
  .object({
    username: z.string(),
    password: z.string(),
    role: z.lazy(() => RoleSchema).optional(),
  })
  .strict();

export const UserCreateWithoutReceiptsInputObjectSchema = Schema;
