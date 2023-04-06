import {z} from 'zod';
import {StatusSchema} from '../enums/Status.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateWithoutUserInput> = z
  .object({
    title: z.string(),
    description: z.string(),
    amount: z.number(),
    status: z.lazy(() => StatusSchema).optional(),
  })
  .strict();

export const ReceiptCreateWithoutUserInputObjectSchema = Schema;
