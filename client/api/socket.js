export const developing = process.env.NODE_ENV !== "production";

export const API_GET_NUMPEOPLE = developing
  ? "http://localhost:8000/api/numpeople"
  : "http://52.78.109.45:80/api/numpeople";

export const ENDPOINT = developing
  ? "http://localhost:8000/room"
  : "http://52.78.109.45:80/room";

export const ENDPOINT_URL = developing
  ? "http://localhost:8000/admin/posturl"
  : "http://52.78.109.45:80/admin/posturl";

export const ENDPOINT_LOGIN = developing
  ? "http://localhost:8000/admin/login"
  : "http://52.78.109.45:80/admin/login";
