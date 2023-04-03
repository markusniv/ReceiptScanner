import {z} from 'zod';
import {UserCreateWithoutReceiptsInputObjectSchema} from './UserCreateWithoutReceiptsInput.schema';
import {UserUncheckedCreateWithoutReceiptsInputObjectSchema} from './UserUncheckedCreateWithoutReceiptsInput.schema';
import {UserCreateOrConnectWithoutReceiptsInputObjectSchema} from './UserCreateOrConnectWithoutReceiptsInput.schema';
import {UserUpsertWithoutReceiptsInputObjectSchema} from './UserUpsertWithoutReceiptsInput.schema';
import {UserWhereUniqueInputObjectSchema} from './UserWhereUniqueInput.schema';
import {UserUpdateWithoutReceiptsInputObjectSchema} from './UserUpdateWithoutReceiptsInput.schema';
import {UserUncheckedUpdateWithoutReceiptsInputObjectSchema} from './UserUncheckedUpdateWithoutReceiptsInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutReceiptsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutReceiptsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutReceiptsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutReceiptsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutReceiptsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutReceiptsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutReceiptsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneWithoutReceiptsNestedInputObjectSchema = Schema;
