import Style from "./styled";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  user: string;
}

interface Props {
  post: Post[];
  postId: number | null;
  setPostId: (postId: number | null) => void;
  onSuccess: () => void;
}

const Dialog: React.FC<Props> = ({ postId, setPostId, post, onSuccess }) => {
  const [users, setUsers] = useState<Post[]>([]);
  const handleDelete = async (id: number) => {
    await axios
      .delete(`http://localhost:4444/posts/${id}`)
      .then(() => onSuccess());
    let newuser = users.filter((item) => {
      return item.id !== id;
    });
    setUsers(newuser);
  };

  const deleteConfirm = () => {
    if (postId !== null) {
      handleDelete(postId);
      setPostId(null);
    }
  };
  console.log(postId, setPostId);
  return (
    <Style>
      <div className="center">
        <div className="dialog">
          <h1>Are you sure you want to delete this item?</h1>
          <div className="buttons">
            <Button
              onClick={deleteConfirm}
              variant="contained"
              className="button-yes"
            >
              Yes
            </Button>
            <Button
              onClick={() => setPostId(null)}
              variant="contained"
              className="button-no"
            >
              No
            </Button>
          </div>
        </div>
      </div>
    </Style>
  );
};
export default Dialog;
