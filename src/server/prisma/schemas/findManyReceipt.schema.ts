import {z} from 'zod';
import {ReceiptOrderByWithRelationInputObjectSchema} from './objects/ReceiptOrderByWithRelationInput.schema';
import {ReceiptWhereInputObjectSchema} from './objects/ReceiptWhereInput.schema';
import {ReceiptWhereUniqueInputObjectSchema} from './objects/ReceiptWhereUniqueInput.schema';
import {ReceiptScalarFieldEnumSchema} from './enums/ReceiptScalarFieldEnum.schema';

export const ReceiptFindManySchema = z.object({
  orderBy: z
    .union([
      ReceiptOrderByWithRelationInputObjectSchema,
      ReceiptOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ReceiptWhereInputObjectSchema.optional(),
  cursor: ReceiptWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ReceiptScalarFieldEnumSchema).optional(),
});
