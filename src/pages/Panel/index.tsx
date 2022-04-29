import {
  AvatarInline,
  Button,
  Icon,
  Layout,
  Sidebar,
  Tooltip,
} from "ebs-design";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../interfaces";
import Users from "../Users";
import { clearAuthTokens, getAccessToken, getRefreshToken } from "axios-jwt";
import axios from "axios";

const Panel = () => {
  const history = useNavigate();
  const [users] = useState<User[]>([]);
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();
  const [username, setUsername] = useState("");
  const logout = () => {
    clearAuthTokens();
    history("/sign");
  };
  const GetData = async () => {
    let res = await axios.get("http://localhost:3333/users");
    let data = res.data;

    const userData = data.find((user: any) => user.id === accessToken);

    setUsername(userData.fullname);
  };

  GetData();

  return (
    <Layout>
      <Layout.Topbar>
        <Layout.Topbar.Toggler />

        <Layout.Topbar.Title>Logo</Layout.Topbar.Title>

        <Layout.Topbar.RightSide>
          <Tooltip
            tooltip={<Button onClick={logout}>Log out</Button>}
            trigger="hover"
            placement="bottom"
          >
            <AvatarInline alt={username} status="active" reversed />
          </Tooltip>{" "}
        </Layout.Topbar.RightSide>
      </Layout.Topbar>

      <Sidebar>
        <Sidebar.TopMenu showToggle={false}>
          <Sidebar.Item
            prefix={<Icon type="home" />}
            text="Dashboard"
            onClick={() => history("/")}
          />
          <Sidebar.Item
            prefix={<Icon type="users" />}
            text="Users"
            onClick={() => history("/users")}
          />
          <Sidebar.Item
            prefix={<Icon type="edit" />}
            text="Posts"
            onClick={() => history("/posts")}
          />
        </Sidebar.TopMenu>
      </Sidebar>
      <Layout.Content>
        <Users />
      </Layout.Content>
      <Layout.Footer />
    </Layout>
  );
};

export default Panel;
