import axios from "axios";

interface Props {
  id: number;
}

const api = axios.create({
  baseURL: "http://localhost:4444/",
});

export const getPosts = () => api.get("/posts").then((res) => res.data);

export const getPost = (id: number) =>
  api.get(`/posts/${id}`).then((res) => res.data);

export const updatePost = ({ id, ...updatedPost }: Props) =>
  api.put(`/posts/${id}`, updatedPost).then((res) => res.data);

export const searchPost = (query: string) =>
  api.get(`/posts?q=${query}`).then((res) => res.data);
