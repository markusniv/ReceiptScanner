import {createTRPCReact} from '@trpc/react-query';
import type {AppRouter} from '../../prisma/generated/routers';

export const trpc = createTRPCReact<AppRouter>();
