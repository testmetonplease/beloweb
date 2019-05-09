import { HOST, DEV_PORT } from '../../constants';
export const MOBILE = (typeof window !== 'undefined') ? (window.screen.availWidth < 800) : true;
export const API_BASE_URL = `http://${HOST}:${DEV_PORT}`;
