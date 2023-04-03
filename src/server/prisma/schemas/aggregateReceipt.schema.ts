import {z} from 'zod';
import {ReceiptOrderByWithRelationInputObjectSchema} from './objects/ReceiptOrderByWithRelationInput.schema';
import {ReceiptWhereInputObjectSchema} from './objects/ReceiptWhereInput.schema';
import {ReceiptWhereUniqueInputObjectSchema} from './objects/ReceiptWhereUniqueInput.schema';
import {ReceiptCountAggregateInputObjectSchema} from './objects/ReceiptCountAggregateInput.schema';
import {ReceiptMinAggregateInputObjectSchema} from './objects/ReceiptMinAggregateInput.schema';
import {ReceiptMaxAggregateInputObjectSchema} from './objects/ReceiptMaxAggregateInput.schema';
import {ReceiptAvgAggregateInputObjectSchema} from './objects/ReceiptAvgAggregateInput.schema';
import {ReceiptSumAggregateInputObjectSchema} from './objects/ReceiptSumAggregateInput.schema';

export const ReceiptAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), ReceiptCountAggregateInputObjectSchema])
    .optional(),
  _min: ReceiptMinAggregateInputObjectSchema.optional(),
  _max: ReceiptMaxAggregateInputObjectSchema.optional(),
  _avg: ReceiptAvgAggregateInputObjectSchema.optional(),
  _sum: ReceiptSumAggregateInputObjectSchema.optional(),
});
