import axios from "axios";

interface Props {
  id: number;
}

const api = axios.create({
  baseURL: "http://localhost:3333/",
});

export const getUsers = () => api.get("/users").then((res) => res.data);

export const getUser = (id: number) =>
  api.get(`/users/${id}`).then((res) => res.data);

export const updateUser = ({ id, ...updatedUser }: Props) =>
  api.put(`/users/${id}`, updatedUser).then((res) => res.data);

export const searchUser = (query: string) =>
  api.get(`/users?q=${query}`).then((res) => res.data);
