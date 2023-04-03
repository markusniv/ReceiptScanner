import {z} from 'zod';
import {IntFilterObjectSchema} from './IntFilter.schema';
import {StringFilterObjectSchema} from './StringFilter.schema';
import {EnumStatusFilterObjectSchema} from './EnumStatusFilter.schema';
import {StatusSchema} from '../enums/Status.schema';
import {IntNullableFilterObjectSchema} from './IntNullableFilter.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ReceiptScalarWhereInputObjectSchema),
        z.lazy(() => ReceiptScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ReceiptScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ReceiptScalarWhereInputObjectSchema),
        z.lazy(() => ReceiptScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    filename: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumStatusFilterObjectSchema),
        z.lazy(() => StatusSchema),
      ])
      .optional(),
    userId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict();

export const ReceiptScalarWhereInputObjectSchema = Schema;
