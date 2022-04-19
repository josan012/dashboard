import Style from "./styled";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import EditIcon from "../../icons/EditIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import { User } from "../../interfaces";
import { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  user: User[];
  onSuccess: () => void;
  setUserId: (postId: number) => void;
}

const Table: React.FC<Props> = ({ user, setUserId }) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3333/users?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);
  return (
    <Style>
      <div className="center">
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <table>
          <thead>
            <th>ID</th>
            <th>Full Name</th>
            <th>Country</th>
            <th>Number</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Action</th>
          </thead>
          {data.map((user, i) => {
            return (
              <tbody>
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{user.fullname}</td>
                  <td>{user.country}</td>
                  <td>{user.number}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td className="icon">
                    <div className="grid">
                      <IconButton className="icon" aria-label="Edit">
                        <Link to={`/users/edit/${user.id}`}>
                          <EditIcon />
                        </Link>
                      </IconButton>
                      <IconButton
                        className="icon"
                        aria-label="Delete"
                        onClick={() => setUserId(user.id)}
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
