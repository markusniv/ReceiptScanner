import {z} from 'zod';
import {SortOrderSchema} from '../enums/SortOrder.schema';
import {ReceiptOrderByRelationAggregateInputObjectSchema} from './ReceiptOrderByRelationAggregateInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    username: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => SortOrderSchema).optional(),
    receipts: z
      .lazy(() => ReceiptOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
