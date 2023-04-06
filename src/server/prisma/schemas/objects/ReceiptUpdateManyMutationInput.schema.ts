import {z} from 'zod';
import {StringFieldUpdateOperationsInputObjectSchema} from './StringFieldUpdateOperationsInput.schema';
import {FloatFieldUpdateOperationsInputObjectSchema} from './FloatFieldUpdateOperationsInput.schema';
import {StatusSchema} from '../enums/Status.schema';
import {EnumStatusFieldUpdateOperationsInputObjectSchema} from './EnumStatusFieldUpdateOperationsInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUpdateManyMutationInput> = z
  .object({
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    amount: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => StatusSchema),
        z.lazy(() => EnumStatusFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ReceiptUpdateManyMutationInputObjectSchema = Schema;
