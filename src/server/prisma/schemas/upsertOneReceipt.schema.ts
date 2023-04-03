import {z} from 'zod';
import {ReceiptWhereUniqueInputObjectSchema} from './objects/ReceiptWhereUniqueInput.schema';
import {ReceiptCreateInputObjectSchema} from './objects/ReceiptCreateInput.schema';
import {ReceiptUncheckedCreateInputObjectSchema} from './objects/ReceiptUncheckedCreateInput.schema';
import {ReceiptUpdateInputObjectSchema} from './objects/ReceiptUpdateInput.schema';
import {ReceiptUncheckedUpdateInputObjectSchema} from './objects/ReceiptUncheckedUpdateInput.schema';

export const ReceiptUpsertSchema = z.object({
  where: ReceiptWhereUniqueInputObjectSchema,
  create: z.union([
    ReceiptCreateInputObjectSchema,
    ReceiptUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ReceiptUpdateInputObjectSchema,
    ReceiptUncheckedUpdateInputObjectSchema,
  ]),
});
