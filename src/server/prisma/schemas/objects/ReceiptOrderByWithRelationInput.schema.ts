import {z} from 'zod';
import {SortOrderSchema} from '../enums/SortOrder.schema';
import {UserOrderByWithRelationInputObjectSchema} from './UserOrderByWithRelationInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    filename: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const ReceiptOrderByWithRelationInputObjectSchema = Schema;
