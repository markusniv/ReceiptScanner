import {z} from 'zod';
import {RoleSchema} from '../enums/Role.schema';
import {ReceiptCreateNestedManyWithoutUserInputObjectSchema} from './ReceiptCreateNestedManyWithoutUserInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    username: z.string(),
    password: z.string(),
    role: z.lazy(() => RoleSchema).optional(),
    receipts: z
      .lazy(() => ReceiptCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;