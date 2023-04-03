import {z} from 'zod';

export const StatusSchema = z.enum(['OPEN', 'CLOSED']);
