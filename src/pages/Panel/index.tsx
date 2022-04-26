import { AvatarInline, Icon, Layout, Sidebar } from "ebs-design";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../interfaces";
import Users from "../Users";

const Panel = () => {
  const history = useNavigate();
  const [users] = useState<User[]>([]);
  return (
    <Layout>
      <Layout.Topbar>
        <Layout.Topbar.Toggler />

        <Layout.Topbar.Title>Logo</Layout.Topbar.Title>

        <Layout.Topbar.RightSide>
          <AvatarInline alt="Josan Mihai" status="active" reversed />
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
        <Users user={users} />
      </Layout.Content>
      <Layout.Footer />
    </Layout>
  );
};

export default Panel;
