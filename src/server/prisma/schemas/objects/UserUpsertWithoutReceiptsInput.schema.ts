import {z} from 'zod';
import {UserUpdateWithoutReceiptsInputObjectSchema} from './UserUpdateWithoutReceiptsInput.schema';
import {UserUncheckedUpdateWithoutReceiptsInputObjectSchema} from './UserUncheckedUpdateWithoutReceiptsInput.schema';
import {UserCreateWithoutReceiptsInputObjectSchema} from './UserCreateWithoutReceiptsInput.schema';
import {UserUncheckedCreateWithoutReceiptsInputObjectSchema} from './UserUncheckedCreateWithoutReceiptsInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutReceiptsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutReceiptsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutReceiptsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutReceiptsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutReceiptsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutReceiptsInputObjectSchema = Schema;
