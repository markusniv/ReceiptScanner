import {z} from 'zod';
import {UserWhereUniqueInputObjectSchema} from './UserWhereUniqueInput.schema';
import {UserCreateWithoutReceiptsInputObjectSchema} from './UserCreateWithoutReceiptsInput.schema';
import {UserUncheckedCreateWithoutReceiptsInputObjectSchema} from './UserUncheckedCreateWithoutReceiptsInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutReceiptsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutReceiptsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutReceiptsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutReceiptsInputObjectSchema = Schema;
