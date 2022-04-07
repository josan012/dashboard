import Style from "./styled";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";
import Users from "../Users";
import Posts from "../Posts";
import Dashboard from "../Dashboard";

const Panel = () => {
  const [active, setActive] = useState("dashboard");

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
            {active === "users" && <Users />}
            {active === "posts" && <Posts />}
            {active === "dashboard" && <Dashboard />}
          </div>
        </div>
      </div>
    </Style>
  );
};
export default Panel;
