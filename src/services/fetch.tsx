import axios from "axios";

export async function fetchApi(path: string, options?: any) {
  return await fetch(process.env.NEXT_PUBLIC_API_URL + "/" + path, options);
}

export const clientApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
