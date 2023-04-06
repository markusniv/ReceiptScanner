import {createTRPCReact} from '@trpc/react-query';
import {AppRouter} from '../server/customRouters/AppRouter';

export const trpc = createTRPCReact<AppRouter>();
