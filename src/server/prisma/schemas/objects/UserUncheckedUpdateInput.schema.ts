import {z} from 'zod';
import {IntFieldUpdateOperationsInputObjectSchema} from './IntFieldUpdateOperationsInput.schema';
import {StringFieldUpdateOperationsInputObjectSchema} from './StringFieldUpdateOperationsInput.schema';
import {RoleSchema} from '../enums/Role.schema';
import {EnumRoleFieldUpdateOperationsInputObjectSchema} from './EnumRoleFieldUpdateOperationsInput.schema';
import {ReceiptUncheckedUpdateManyWithoutUserNestedInputObjectSchema} from './ReceiptUncheckedUpdateManyWithoutUserNestedInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    username: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    password: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    role: z
      .union([
        z.lazy(() => RoleSchema),
        z.lazy(() => EnumRoleFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    receipts: z
      .lazy(() => ReceiptUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateInputObjectSchema = Schema;
