import {z} from 'zod';
import {ReceiptWhereUniqueInputObjectSchema} from './ReceiptWhereUniqueInput.schema';
import {ReceiptUpdateWithoutUserInputObjectSchema} from './ReceiptUpdateWithoutUserInput.schema';
import {ReceiptUncheckedUpdateWithoutUserInputObjectSchema} from './ReceiptUncheckedUpdateWithoutUserInput.schema';
import {ReceiptCreateWithoutUserInputObjectSchema} from './ReceiptCreateWithoutUserInput.schema';
import {ReceiptUncheckedCreateWithoutUserInputObjectSchema} from './ReceiptUncheckedCreateWithoutUserInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ReceiptUpdateWithoutUserInputObjectSchema),
      z.lazy(() => ReceiptUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ReceiptCreateWithoutUserInputObjectSchema),
      z.lazy(() => ReceiptUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ReceiptUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
