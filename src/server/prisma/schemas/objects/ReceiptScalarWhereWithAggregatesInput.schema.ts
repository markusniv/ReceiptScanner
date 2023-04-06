import {z} from 'zod';
import {IntWithAggregatesFilterObjectSchema} from './IntWithAggregatesFilter.schema';
import {StringWithAggregatesFilterObjectSchema} from './StringWithAggregatesFilter.schema';
import {FloatWithAggregatesFilterObjectSchema} from './FloatWithAggregatesFilter.schema';
import {EnumStatusWithAggregatesFilterObjectSchema} from './EnumStatusWithAggregatesFilter.schema';
import {StatusSchema} from '../enums/Status.schema';
import {IntNullableWithAggregatesFilterObjectSchema} from './IntNullableWithAggregatesFilter.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ReceiptScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ReceiptScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ReceiptScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ReceiptScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ReceiptScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    title: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    amount: z
      .union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumStatusWithAggregatesFilterObjectSchema),
        z.lazy(() => StatusSchema),
      ])
      .optional(),
    userId: z
      .union([
        z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const ReceiptScalarWhereWithAggregatesInputObjectSchema = Schema;
