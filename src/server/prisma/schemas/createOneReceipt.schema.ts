import {z} from 'zod';
import {ReceiptCreateInputObjectSchema} from './objects/ReceiptCreateInput.schema';
import {ReceiptUncheckedCreateInputObjectSchema} from './objects/ReceiptUncheckedCreateInput.schema';

export const ReceiptCreateOneSchema = z.object({
  data: z.union([
    ReceiptCreateInputObjectSchema,
    ReceiptUncheckedCreateInputObjectSchema,
  ]),
});
