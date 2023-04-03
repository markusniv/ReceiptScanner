import {z} from 'zod';
import {ReceiptWhereUniqueInputObjectSchema} from './ReceiptWhereUniqueInput.schema';
import {ReceiptCreateWithoutUserInputObjectSchema} from './ReceiptCreateWithoutUserInput.schema';
import {ReceiptUncheckedCreateWithoutUserInputObjectSchema} from './ReceiptUncheckedCreateWithoutUserInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ReceiptCreateWithoutUserInputObjectSchema),
      z.lazy(() => ReceiptUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ReceiptCreateOrConnectWithoutUserInputObjectSchema = Schema;
