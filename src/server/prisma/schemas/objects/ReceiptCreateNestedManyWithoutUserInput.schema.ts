import {z} from 'zod';
import {ReceiptCreateWithoutUserInputObjectSchema} from './ReceiptCreateWithoutUserInput.schema';
import {ReceiptUncheckedCreateWithoutUserInputObjectSchema} from './ReceiptUncheckedCreateWithoutUserInput.schema';
import {ReceiptCreateOrConnectWithoutUserInputObjectSchema} from './ReceiptCreateOrConnectWithoutUserInput.schema';
import {ReceiptCreateManyUserInputEnvelopeObjectSchema} from './ReceiptCreateManyUserInputEnvelope.schema';
import {ReceiptWhereUniqueInputObjectSchema} from './ReceiptWhereUniqueInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateNestedManyWithoutUserInput> = z
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
    createMany: z
      .lazy(() => ReceiptCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
        z.lazy(() => ReceiptWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ReceiptCreateNestedManyWithoutUserInputObjectSchema = Schema;
