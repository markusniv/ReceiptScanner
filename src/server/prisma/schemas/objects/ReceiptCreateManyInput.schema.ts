import {z} from 'zod';
import {StatusSchema} from '../enums/Status.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateManyInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    filename: z.string(),
    status: z.lazy(() => StatusSchema).optional(),
    userId: z.number().optional().nullable(),
  })
  .strict();

export const ReceiptCreateManyInputObjectSchema = Schema;
