import Style from "./styled";
import Widget from "../../components/Widget";
import { useState, useEffect } from "react";
import axios from "axios";
import CreatePost from "../../components/CreatePost";
import Button from "@mui/material/Button";
import Dialog from "../../components/Dialog";
import { Link } from "react-router-dom";
import PostTabel from "../../components/PostTabel";

interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  user: string;
}

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

  async function getAllPosts() {
    try {
      const posts = await axios.get("http://localhost:4444/posts");
      console.log(posts.data);
      setPosts(posts.data);
    } catch (error) {
      console.log("Something is wrong");
    }
  }

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
            {print ? (
              <div>
                <span>{data}</span>
                <span>
                  <Button onClick={clear}>
                    <Link to="/sign" className="logout">
                      Log Out
                    </Link>
                  </Button>
                </span>
              </div>
            ) : (
              <div className="sign">
                <span>
                  <Link to="/sign">Sign In</Link>
                </span>
                <span className="signup">
                  <Link to="/registration">Sign Up</Link>
                </span>
              </div>
            )}
          </div>
          <div className="center">
            {isOpen && (
              <CreatePost
                setIsOpen={setIsOpen}
                onSuccess={() => getAllPosts()}
              />
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
              <div className="grid">
                <div className="row">
                  {post.map((post, i) => {
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
        </div>
      </div>
    </Style>
  );
};
export default Posts;
