import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export interface BlogPayload {
  topic: string;
  current_language?: string;
}

export const generateBlog = async (
  payload: BlogPayload
) => {
  const response = await API.post(
    "/blogs",
    payload
  );

  return response.data;
};