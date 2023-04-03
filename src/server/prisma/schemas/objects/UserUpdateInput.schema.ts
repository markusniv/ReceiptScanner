import {z} from 'zod';
import {StringFieldUpdateOperationsInputObjectSchema} from './StringFieldUpdateOperationsInput.schema';
import {RoleSchema} from '../enums/Role.schema';
import {EnumRoleFieldUpdateOperationsInputObjectSchema} from './EnumRoleFieldUpdateOperationsInput.schema';
import {ReceiptUpdateManyWithoutUserNestedInputObjectSchema} from './ReceiptUpdateManyWithoutUserNestedInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateInput> = z
  .object({
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
      .lazy(() => ReceiptUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUpdateInputObjectSchema = Schema;
