import {z} from 'zod';
import {IntWithAggregatesFilterObjectSchema} from './IntWithAggregatesFilter.schema';
import {StringWithAggregatesFilterObjectSchema} from './StringWithAggregatesFilter.schema';
import {EnumRoleWithAggregatesFilterObjectSchema} from './EnumRoleWithAggregatesFilter.schema';
import {RoleSchema} from '../enums/Role.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    username: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    password: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    role: z
      .union([
        z.lazy(() => EnumRoleWithAggregatesFilterObjectSchema),
        z.lazy(() => RoleSchema),
      ])
      .optional(),
  })
  .strict();

export const UserScalarWhereWithAggregatesInputObjectSchema = Schema;
