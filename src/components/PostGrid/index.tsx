/* eslint-disable jsx-a11y/anchor-is-valid */
import Style from "./styled";
import Widget from "../Widget";
import { useEffect, useState } from "react";
import { Post } from "../../interfaces";
import axios from "axios";

const PostGrid = () => {
  const [post, setPosts] = useState<Post[]>([]);
  const [postId, setPostId] = useState<number | null>(null);
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
  const [query, setQuery] = useState("");

  const [content, setContent] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:4444/posts?q=${query}`);
      setContent(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);
  return (
    <Style>
      <div className="center">
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <div className="grid">
          <div className="row">
            {content.map((post, i) => {
              return (
                <Widget
                  post={post}
                  setPostId={setPostId}
                  onSuccess={() => getAllPosts()}
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
export default PostGrid;
