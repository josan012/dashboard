import { useQuery, useMutation } from "react-query";
import axios from "axios";
import { User } from "../interfaces";
import { useNavigate, useParams } from "react-router-dom";

const fetchUsers = async () => {
  await axios.get(`http://localhost:3333/users`);
};

export const useUsersData = (onSuccess: any, onError: any) => {
  return useQuery("users", fetchUsers, {
    onSuccess,
    onError,
  });
};

const addUser = async (data: User) => {
  try {
    await axios.post(`http://localhost:3333/users`, data);
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    console.log("Something is Wrong");
  }
};

export const useAddUserData = () => {
  return useMutation(addUser);
};
