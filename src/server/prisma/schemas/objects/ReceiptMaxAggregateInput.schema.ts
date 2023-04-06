import {z} from 'zod';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    status: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict();

export const ReceiptMaxAggregateInputObjectSchema = Schema;
