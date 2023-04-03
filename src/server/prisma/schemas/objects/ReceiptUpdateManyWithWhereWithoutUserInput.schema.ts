import {z} from 'zod';
import {ReceiptScalarWhereInputObjectSchema} from './ReceiptScalarWhereInput.schema';
import {ReceiptUpdateManyMutationInputObjectSchema} from './ReceiptUpdateManyMutationInput.schema';
import {ReceiptUncheckedUpdateManyWithoutReceiptsInputObjectSchema} from './ReceiptUncheckedUpdateManyWithoutReceiptsInput.schema';

import type {Prisma} from '@prisma/client';

const Schema: z.ZodType<Prisma.ReceiptUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => ReceiptScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ReceiptUpdateManyMutationInputObjectSchema),
      z.lazy(() => ReceiptUncheckedUpdateManyWithoutReceiptsInputObjectSchema),
    ]),
  })
  .strict();

export const ReceiptUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
