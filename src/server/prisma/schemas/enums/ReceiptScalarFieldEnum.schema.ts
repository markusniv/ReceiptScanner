import {z} from 'zod';

export const ReceiptScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'filename',
  'status',
  'userId',
]);
