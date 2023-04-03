import {z} from 'zod';
import {RoleSchema} from '../enums/Role.schema';
import {ReceiptUncheckedCreateNestedManyWithoutUserInputObjectSchema} from './ReceiptUncheckedCreateNestedManyWithoutUserInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    username: z.string(),
    password: z.string(),
    role: z.lazy(() => RoleSchema).optional(),
    receipts: z
      .lazy(() => ReceiptUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateInputObjectSchema = Schema;
