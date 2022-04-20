import Style from "./styled";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

interface User {
  id: number;
  fullname: string;
  country: string;
  number: string;
  email: string;
}

interface Props {
  user: User[];
  userId: number | null;
  setUserId: (userId: number | null) => void;
  onSuccess: () => void;
}

const Dialog: React.FC<Props> = ({ userId, setUserId, user, onSuccess }) => {
  const [users, setUsers] = useState<User[]>([]);
  const handleDelete = async (id: number) => {
    await axios
      .delete(`http://localhost:3333/users/${id}`)
      .then(() => onSuccess());
    let newuser = users.filter((item) => {
      return item.id !== id;
    });
    setUsers(newuser);
  };

  const deleteConfirm = () => {
    if (userId !== null) {
      handleDelete(userId);
      setUserId(null);
    }
  };
  console.log(userId, setUserId);
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
              onClick={() => setUserId(null)}
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
