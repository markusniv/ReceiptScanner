import {z} from 'zod';
import {StatusSchema} from '../enums/Status.schema';
import {UserCreateNestedOneWithoutReceiptsInputObjectSchema} from './UserCreateNestedOneWithoutReceiptsInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateInput> = z
  .object({
    title: z.string(),
    description: z.string(),
    amount: z.number(),
    status: z.lazy(() => StatusSchema).optional(),
    user: z
      .lazy(() => UserCreateNestedOneWithoutReceiptsInputObjectSchema)
      .optional(),
  })
  .strict();

export const ReceiptCreateInputObjectSchema = Schema;
