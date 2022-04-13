import React from "react";
import Style from "./styled";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Add from "../../components/Add";
import Table from "../../components/Table";
import { Link } from "react-router-dom";
import DialogUsers from "../../components/DialogUsers";

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
  const [userId, setUserId] = useState<number | null>(null);

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
      <div className="panel">
        <div className="right">
          <div className="users">
            <Link to="/users">Users</Link>
          </div>
          <div className="posts">
            <Link to="/posts">Posts</Link>
          </div>
          <div className="dashboard">
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </div>
        <div className="left">
          <div className="corner">
            <div className="sign">
              <span>
                <Link to="/sign">Sign In</Link>
              </span>
              <span>
                <Link to="/registration">Sign Up</Link>
              </span>
            </div>
          </div>
          <div className="center">
            {isOpen && (
              <Add setIsOpen={setIsOpen} onSuccess={() => getAllUsers()} />
            )}
            <Button onClick={togglePopup}>Add</Button>
            <Table
              user={users}
              onSuccess={() => getAllUsers()}
              setUserId={setUserId}
            />
            {userId && (
              <div className="confirm">
                <DialogUsers
                  setUserId={(val) => setUserId(val === null ? val : userId)}
                  userId={userId}
                  user={user}
                  onSuccess={() => getAllUsers()}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Style>
  );
};
export default Users;
