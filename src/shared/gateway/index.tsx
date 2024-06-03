import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 1000,
});

export const fetcher = (url: string) =>
  instance.get(url).then((res) => res.data);
