import {z} from 'zod';
import {StringFieldUpdateOperationsInputObjectSchema} from './StringFieldUpdateOperationsInput.schema';
import {StatusSchema} from '../enums/Status.schema';
import {EnumStatusFieldUpdateOperationsInputObjectSchema} from './EnumStatusFieldUpdateOperationsInput.schema';
import {UserUpdateOneWithoutReceiptsNestedInputObjectSchema} from './UserUpdateOneWithoutReceiptsNestedInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUpdateInput> = z
  .object({
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
    user: z
      .lazy(() => UserUpdateOneWithoutReceiptsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ReceiptUpdateInputObjectSchema = Schema;
