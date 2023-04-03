import {z} from 'zod';
import {IntFieldUpdateOperationsInputObjectSchema} from './IntFieldUpdateOperationsInput.schema';
import {StringFieldUpdateOperationsInputObjectSchema} from './StringFieldUpdateOperationsInput.schema';
import {StatusSchema} from '../enums/Status.schema';
import {EnumStatusFieldUpdateOperationsInputObjectSchema} from './EnumStatusFieldUpdateOperationsInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUncheckedUpdateWithoutUserInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    filename: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
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

export const ReceiptUncheckedUpdateWithoutUserInputObjectSchema = Schema;
