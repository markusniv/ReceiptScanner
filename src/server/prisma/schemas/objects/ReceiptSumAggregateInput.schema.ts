import {z} from 'zod';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict();

export const ReceiptSumAggregateInputObjectSchema = Schema;
