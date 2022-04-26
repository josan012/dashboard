import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "ebs-design";
import Add from "../../components/Add";
import TableUsers from "../../components/TableUsers";
import DialogUsers from "../../components/DialogUsers";
import { User } from "../../interfaces";
import "./style.scss";

interface Props {
  user: User[];
}

const Users: React.FC<Props> = ({ user }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
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
  return (
    <div className="center">
      {isOpen && <Add setIsOpen={setIsOpen} onSuccess={() => getAllUsers()} />}
      <Button onClick={togglePopup}>Add</Button>
      <TableUsers
        user={users}
        onSuccess={() => getAllUsers()}
        setUserId={setUserId}
      />
      {userId && (
        <div className="confirm">
          <DialogUsers
            setUserId={(val) => setUserId(val === null ? val : userId)}
            userId={userId}
            user={user}
            onSuccess={() => getAllUsers()}
          />
        </div>
      )}
    </div>
  );
};
export default Users;
