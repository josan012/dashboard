import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard";
import { AvatarInline, Icon, Layout, Sidebar } from "ebs-design";
import "./style.scss";

const PanelDashboard = () => {
  const history = useNavigate();
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
      <Layout.Content className="center">
        <Dashboard />
      </Layout.Content>
      <Layout.Footer />
    </Layout>
  );
};
export default PanelDashboard;
