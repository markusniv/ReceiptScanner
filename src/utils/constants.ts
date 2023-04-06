export const PORT: string = '3000';
export const ERROR = 'ERROR';
export const USER_SESSION = 'USER_SESSION';
export const TRPC_API_ENDPOINT = '/trpc';
export const LOCAL_ADDRESS: string = `http://localhost:${PORT}${TRPC_API_ENDPOINT}`;
export const MOBILE_DEV_ADDRESS: string = `http://10.0.2.2:${PORT}${TRPC_API_ENDPOINT}`;

// HIDE THESE IF USING FOR PRODUCTION PURPOSES!!
export const ACCESS_SECRET_KEY = 'access_secret_key';
export const REFRESH_SECRET_KEY = 'refresh_secret_key';
