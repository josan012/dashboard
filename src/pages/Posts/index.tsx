import Style from "./styled";
import { useState, useEffect } from "react";
import axios from "axios";
import CreatePost from "../../components/CreatePost";
import Button from "@mui/material/Button";
import Dialog from "../../components/Dialog";
import { Link } from "react-router-dom";
import PostTabel from "../../components/PostTabel";
import { Post } from "../../interfaces";
import PostGrid from "../../components/PostGrid";

interface Props {
  posts: Post[];
}

const Posts: React.FC<Props> = () => {
  const [post, setPosts] = useState<Post[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [postId, setPostId] = useState<number | null>(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

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

  const [print, setPrint] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("email") || "{}");
    if (data) {
      setData(data);
      setPrint(true);
    }
  }, []);

  const clear = () => {
    const data = localStorage.setItem("email", JSON.stringify(null));
    if (data === null) {
      setData(data);
    }
  };

  const [switcher, setSwitcher] = useState("card");
  return (
    <Style>
      <div className="center">
        {isOpen && (
          <CreatePost setIsOpen={setIsOpen} onSuccess={() => getAllPosts()} />
        )}
        <span>
          <Button onClick={togglePopup}>Add</Button>
        </span>
        <span>
          <Button onClick={() => setSwitcher("tabel")}>Tabel</Button>
        </span>
        <span>
          <Button onClick={() => setSwitcher("card")}>Card</Button>
        </span>

        {switcher === "card" ? (
          <PostGrid />
        ) : (
          <PostTabel
            posts={post}
            onSuccess={() => getAllPosts()}
            setPostId={setPostId}
          />
        )}

        {postId && (
          <div className="confirm">
            <Dialog
              setPostId={(val) => setPostId(val === null ? val : postId)}
              postId={postId}
              post={post}
              onSuccess={() => getAllPosts()}
            />
          </div>
        )}
      </div>
    </Style>
  );
};
export default Posts;
