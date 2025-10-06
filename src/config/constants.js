// src/config/constants.js
export const bilderServer = import.meta.env.DEV 
  ? import.meta.env.VITE_BILDERSERVER_LOCAL
  : import.meta.env.VITE_BILDERSERVER_PROD;