import {z} from 'zod';
import {SortOrderSchema} from '../enums/SortOrder.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ReceiptMinOrderByAggregateInputObjectSchema = Schema;
