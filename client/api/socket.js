export const developing = process.env.NODE_ENV !== "production";

export const base = developing
  ? "http://localhost:8000"
  : "http://54.180.1.112";

export const API_GET_NUMPEOPLE = base + "/api/numpeople";

export const ENDPOINT = base + "/room";

export const ENDPOINT_URL = base + "/admin/posturl";

export const ENDPOINT_LOGIN = base + "/admin/login";
