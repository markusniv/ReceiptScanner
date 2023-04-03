import {z} from 'zod';
import {RoleSchema} from '../enums/Role.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutReceiptsInput> = z
  .object({
    id: z.number().optional(),
    username: z.string(),
    password: z.string(),
    role: z.lazy(() => RoleSchema).optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutReceiptsInputObjectSchema = Schema;
