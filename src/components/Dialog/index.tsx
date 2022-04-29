import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import "./style.scss";

interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  user: string;
}

interface Props {
  postId: number | null;
  setPostId: (postId: number | null) => void;
}

const Dialog: React.FC<Props> = ({ postId, setPostId }) => {
  const [users, setUsers] = useState<Post[]>([]);
  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:4444/posts/${id}`);
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
  );
};
export default Dialog;
