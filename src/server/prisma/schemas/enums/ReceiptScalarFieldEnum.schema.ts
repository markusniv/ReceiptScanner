import {z} from 'zod';

export const ReceiptScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'description',
  'amount',
  'status',
  'userId',
]);
