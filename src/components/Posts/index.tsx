import Style from "./styled";
import Widget from "../Widget";
import { useState, useEffect } from "react";
import axios from "axios";

interface Post {
  title: string;
  description: string;
  date: string;
  user: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  async function getAllPosts() {
    try {
      const posts = await axios.get("http://localhost:4444/posts");
      console.log(posts.data);
      setPosts(posts.data);
    } catch (error) {
      console.log("Something is wrong");
    }
  }
  return (
    <Style>
      <div className="center">
        <div className="grid">
          <div className="row">
            {posts.map((post, i) => {
              return (
                <Widget
                  key={i}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  user={post.user}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Style>
  );
};
export default Posts;
