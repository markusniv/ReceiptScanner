import {z} from 'zod';
import {ReceiptCreateWithoutUserInputObjectSchema} from './ReceiptCreateWithoutUserInput.schema';
import {ReceiptUncheckedCreateWithoutUserInputObjectSchema} from './ReceiptUncheckedCreateWithoutUserInput.schema';
import {ReceiptCreateOrConnectWithoutUserInputObjectSchema} from './ReceiptCreateOrConnectWithoutUserInput.schema';
import {ReceiptUpsertWithWhereUniqueWithoutUserInputObjectSchema} from './ReceiptUpsertWithWhereUniqueWithoutUserInput.schema';
import {ReceiptCreateManyUserInputEnvelopeObjectSchema} from './ReceiptCreateManyUserInputEnvelope.schema';
import {ReceiptWhereUniqueInputObjectSchema} from './ReceiptWhereUniqueInput.schema';
import {ReceiptUpdateWithWhereUniqueWithoutUserInputObjectSchema} from './ReceiptUpdateWithWhereUniqueWithoutUserInput.schema';
import {ReceiptUpdateManyWithWhereWithoutUserInputObjectSchema} from './ReceiptUpdateManyWithWhereWithoutUserInput.schema';
import {ReceiptScalarWhereInputObjectSchema} from './ReceiptScalarWhereInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReceiptCreateWithoutUserInputObjectSchema),
          z.lazy(() => ReceiptCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => ReceiptUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ReceiptUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ReceiptCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => ReceiptCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ReceiptUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ReceiptUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ReceiptCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
          z.lazy(() => ReceiptWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
          z.lazy(() => ReceiptWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
          z.lazy(() => ReceiptWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
          z.lazy(() => ReceiptWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ReceiptUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ReceiptUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ReceiptUpdateManyWithWhereWithoutUserInputObjectSchema),
          z
            .lazy(() => ReceiptUpdateManyWithWhereWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ReceiptScalarWhereInputObjectSchema),
          z.lazy(() => ReceiptScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ReceiptUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
