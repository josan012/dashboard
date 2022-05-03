import "./style.scss";
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
  userId: number | null;
  setUserId: (userId: number | null) => void;
}

const Dialog: React.FC<Props> = ({ userId, setUserId }) => {
  const [users, setUsers] = useState<User[]>([]);
  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:3333/users/${id}`);
    let newuser = users.filter((item) => {
      return item.id !== id;
    });
    setUsers(newuser);
  };

  const getAllUsers = async () => {
    try {
      const users = await axios.get("http://localhost:3333/users");
      console.log(users.data);
      setUsers(users.data);
    } catch (error) {
      console.log("Something is wrong");
    }
  };

  const deleteConfirm = () => {
    if (userId !== null) {
      handleDelete(userId);
      getAllUsers();
      setUserId(null);
    }
  };
  console.log(userId, setUserId);
  return (
    <div className="center">
      <div className="popup">
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
  );
};
export default Dialog;
