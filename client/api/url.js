import { developing } from "./socket";

export const API_GET_URL = developing
  ? "http://localhost:8000/api/url"
  : "http://52.78.109.45:80/api/url";
