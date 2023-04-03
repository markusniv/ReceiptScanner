import {z} from 'zod';
import {ReceiptUpdateInputObjectSchema} from './objects/ReceiptUpdateInput.schema';
import {ReceiptUncheckedUpdateInputObjectSchema} from './objects/ReceiptUncheckedUpdateInput.schema';
import {ReceiptWhereUniqueInputObjectSchema} from './objects/ReceiptWhereUniqueInput.schema';

export const ReceiptUpdateOneSchema = z.object({
  data: z.union([
    ReceiptUpdateInputObjectSchema,
    ReceiptUncheckedUpdateInputObjectSchema,
  ]),
  where: ReceiptWhereUniqueInputObjectSchema,
});
