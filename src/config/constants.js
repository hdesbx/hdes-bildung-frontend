// src/config/constants.js
export const bilderServer = import.meta.env.DEV 
  ? import.meta.env.VITE_IMAGE_BASE_PATH
  : import.meta.env.VITE_CLOUD_IMAGE_BASE_PATH;