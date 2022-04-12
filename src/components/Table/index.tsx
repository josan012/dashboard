import Style from "./styled";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import EditIcon from "../../icons/EditIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import axios from "axios";
import { useState } from "react";

interface User {
  id: number;
  fullname: string;
  country: string;
  number: string;
  email: string;
}

interface Props {
  user: User[];
  onSuccess: () => void;
}

const Table: React.FC<Props> = ({ user, onSuccess }) => {
  const [users, setUsers] = useState<User[]>([]);
  const handleDelete = async (id: number) => {
    await axios
      .delete(`http://localhost:3333/users/${id}`)
      .then(() => onSuccess());
    var newuser = users.filter((item) => {
      return item.id !== id;
    });
    setUsers(newuser);
  };

  return (
    <Style>
      <div className="center">
        <table>
          <thead>
            <th>ID</th>
            <th>Full Name</th>
            <th>Country</th>
            <th>Number</th>
            <th>Email</th>
            <th>Action</th>
          </thead>
          {user.map((user, i) => {
            return (
              <tbody>
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{user.fullname}</td>
                  <td>{user.country}</td>
                  <td>{user.number}</td>
                  <td>{user.email}</td>
                  <td className="icon">
                    <div className="grid">
                      <IconButton className="icon" aria-label="Edit">
                        <Link to={`/edit/${user.id}`}>
                          <EditIcon />
                        </Link>
                      </IconButton>
                      <IconButton
                        className="icon"
                        aria-label="Delete"
                        onClick={() => handleDelete(user.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </Style>
  );
};
export default Table;
