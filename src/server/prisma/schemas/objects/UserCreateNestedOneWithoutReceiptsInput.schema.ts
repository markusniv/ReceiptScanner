import {z} from 'zod';
import {UserCreateWithoutReceiptsInputObjectSchema} from './UserCreateWithoutReceiptsInput.schema';
import {UserUncheckedCreateWithoutReceiptsInputObjectSchema} from './UserUncheckedCreateWithoutReceiptsInput.schema';
import {UserCreateOrConnectWithoutReceiptsInputObjectSchema} from './UserCreateOrConnectWithoutReceiptsInput.schema';
import {UserWhereUniqueInputObjectSchema} from './UserWhereUniqueInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutReceiptsInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutReceiptsInputObjectSchema = Schema;
