import React from "react";
import { useState, useEffect } from "react";
import { Button } from "ebs-design";
import Add from "../../components/Add";
import TableUsers from "../../components/TableUsers";
import DialogUsers from "../../components/DialogUsers";
import "./style.scss";

const Users: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);

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

  return (
    <div className="center">
      {isOpen && <Add setIsOpen={setIsOpen} />}
      <Button onClick={togglePopup}>Add</Button>
      <TableUsers setUserId={setUserId} />
      {userId && (
        <div className="confirm">
          <DialogUsers
            setUserId={(val) => setUserId(val === null ? val : userId)}
            userId={userId}
          />
        </div>
      )}
    </div>
  );
};
export default Users;
