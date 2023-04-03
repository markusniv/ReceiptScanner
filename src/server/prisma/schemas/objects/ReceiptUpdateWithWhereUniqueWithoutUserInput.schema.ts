import {z} from 'zod';
import {ReceiptWhereUniqueInputObjectSchema} from './ReceiptWhereUniqueInput.schema';
import {ReceiptUpdateWithoutUserInputObjectSchema} from './ReceiptUpdateWithoutUserInput.schema';
import {ReceiptUncheckedUpdateWithoutUserInputObjectSchema} from './ReceiptUncheckedUpdateWithoutUserInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => ReceiptWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ReceiptUpdateWithoutUserInputObjectSchema),
      z.lazy(() => ReceiptUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ReceiptUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
