// These constants are injected via webpack environment variables.
// You can add more variables in vue.config.js
// If you change the values in the webpack config files, you need to re run webpack to update the application

export const VERSION = process.env.VERSION;
export const SHOW_VERSION = process.env.SHOW_VERSION;
export const DEBUG_INFO_ENABLED = !!process.env.DEBUG_INFO_ENABLED;
export const SERVER_API_URL = 'https://api.ftd-qa.est-rouge-tech.com/'; // process.env.API_URL;
export const LOCALE = process.env.LOCALE;
export const FALLBACK_LOCALE = process.env.FALLBACK_LOCALE;
export const BUILD_TIMESTAMP = process.env.BUILD_TIMESTAMP;
export const STUB_API_URL = process.env.STUB_API_URL;
export const TIME_ZONE = process.env.TIME_ZONE;
export const SERVER_TIME_ZONE = process.env.SERVER_TIME_ZONE;
export const PREVENT_WINDOW_UNLOAD = process.env.PREVENT_WINDOW_UNLOAD;
export const BASE_EXTENDING_ACCESS_TOKEN =
  process.env.BASE_EXTENDING_ACCESS_TOKEN;
export const RME_EXTENDING_TOKEN = process.env.RME_EXTENDING_TOKEN;
export const NRME_EXTENDING_TOKEN = process.env.NRME_EXTENDING_TOKEN;
export const API_CHAT_URL = process.env.API_CHAT_URL;
export const WEBSOCKET_URL = process.env.WEBSOCKET_URL;

// Other constants
export const DATE_TIME_FORMAT = 'yyyy/mm/dd HH:mm';
export const Authorities = {
  SUPER_USER: 'ROLE_AGENCY',
  END_USER: 'ROLE_USER'
};
