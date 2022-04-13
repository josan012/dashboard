import Style from "./styled";
import Widget from "../Widget";
import { useState, useEffect } from "react";
import axios from "axios";
import CreatePost from "../CreatePost";
import Button from "@mui/material/Button";
import Dialog from "../Dialog";

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
  return (
    <Style>
      <div className="center">
        {isOpen && (
          <CreatePost setIsOpen={setIsOpen} onSuccess={() => getAllPosts()} />
        )}
        <Button onClick={togglePopup}>Add</Button>
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
