import Style from "./styled";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import Users from "../Users";
import Posts from "../Posts";
import Dashboard from "../Dashboard";

interface User {
  id: number;
  fullname: string;
  country: string;
  number: string;
  email: string;
}

const Panel = () => {
  const [active, setActive] = useState("users");

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllUsers();
  }, []);

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
        <div className="panel">
          <div className="right">
            <div className="users">
              <Button onClick={() => setActive("users")}>Users</Button>
            </div>
            <div className="posts">
              <Button onClick={() => setActive("posts")}>Posts</Button>
            </div>
            <div className="dashboard">
              <Button onClick={() => setActive("dashboard")}>Dashboard</Button>
            </div>
          </div>
          <div className="left">
            <div className="corner">
              <span>
                <Link to="/sign">Sign In</Link>
              </span>
              <span>
                <Link to="/registration">Sign Up</Link>
              </span>
            </div>
            {active === "users" && <Users user={users} />}
            {active === "posts" && <Posts />}
            {active === "dashboard" && <Dashboard />}
          </div>
        </div>
      </div>
    </Style>
  );
};
export default Panel;
