import {z} from 'zod';
import {ReceiptCreateManyUserInputObjectSchema} from './ReceiptCreateManyUserInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ReceiptCreateManyUserInputObjectSchema),
      z.lazy(() => ReceiptCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ReceiptCreateManyUserInputEnvelopeObjectSchema = Schema;
