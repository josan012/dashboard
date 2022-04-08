import React from "react";
import Style from "./styled";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Add from "../Add";
import Table from "../Table";

interface User {
  id: number;
  fullname: string;
  country: string;
  number: string;
  email: string;
}

interface Props {
  user: User[];
}

const Users: React.FC<Props> = ({ user }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  async function getAllUsers() {
    try {
      const users = await axios.get("http://localhost:3333/users");
      console.log(users.data);
      setUsers(users.data);
    } catch (error) {
      console.log("Something is wrong");
    }
  }

  return (
    <Style>
      <div className="center">
        {isOpen && (
          <Add setIsOpen={setIsOpen} onSuccess={() => getAllUsers()} />
        )}
        <Button onClick={togglePopup}>Add</Button>
        <Table user={users} onSuccess={() => getAllUsers()} />
      </div>
    </Style>
  );
};
export default Users;
