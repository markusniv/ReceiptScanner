import {z} from 'zod';
import {IntFilterObjectSchema} from './IntFilter.schema';
import {StringFilterObjectSchema} from './StringFilter.schema';
import {EnumRoleFilterObjectSchema} from './EnumRoleFilter.schema';
import {RoleSchema} from '../enums/Role.schema';
import {ReceiptListRelationFilterObjectSchema} from './ReceiptListRelationFilter.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    username: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    password: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    role: z
      .union([
        z.lazy(() => EnumRoleFilterObjectSchema),
        z.lazy(() => RoleSchema),
      ])
      .optional(),
    receipts: z.lazy(() => ReceiptListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
