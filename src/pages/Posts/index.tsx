import Style from "./styled";
import { useState, useEffect } from "react";
import CreatePost from "../../components/CreatePost";
import Button from "@mui/material/Button";
import Dialog from "../../components/Dialog";
import PostTabel from "../../components/PostTabel";
import { Post } from "../../interfaces";
import PostGrid from "../../components/PostGrid";

interface Props {
  posts: Post[];
}

const Posts: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [postId, setPostId] = useState<number | null>(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
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

  const [switcher, setSwitcher] = useState("card");

  return (
    <Style>
      <div className="center">
        {isOpen && <CreatePost setIsOpen={setIsOpen} />}
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
          <PostTabel setPostId={setPostId} />
        )}

        {postId && (
          <div className="confirm">
            <Dialog
              setPostId={(val) => setPostId(val === null ? val : postId)}
              postId={postId}
            />
          </div>
        )}
      </div>
    </Style>
  );
};
export default Posts;
