import {z} from 'zod';
import {ReceiptWhereInputObjectSchema} from './ReceiptWhereInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptListRelationFilter> = z
  .object({
    every: z.lazy(() => ReceiptWhereInputObjectSchema).optional(),
    some: z.lazy(() => ReceiptWhereInputObjectSchema).optional(),
    none: z.lazy(() => ReceiptWhereInputObjectSchema).optional(),
  })
  .strict();

export const ReceiptListRelationFilterObjectSchema = Schema;
