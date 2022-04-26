import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Post } from "../../interfaces";
import { AvatarInline, Icon, Layout, Sidebar } from "ebs-design";
import Posts from "../Posts";

interface Props {
  posts: Post[];
}

const PanelPosts: React.FC<Props> = () => {
  const [post, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    try {
      const posts = await axios.get("http://localhost:4444/posts");
      console.log(posts.data);
      setPosts(posts.data);
    } catch (error) {
      console.log("Something is wrong");
    }
  };

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
      <Layout.Content>
        <Posts posts={post} />
      </Layout.Content>
      <Layout.Footer />
    </Layout>
  );
};
export default PanelPosts;
