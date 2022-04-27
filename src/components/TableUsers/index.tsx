import "./style.scss";
import { Link } from "react-router-dom";
import EditIcon from "../../icons/EditIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import { User } from "../../interfaces";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination";

interface Props {
  user: User[];
  onSuccess: () => void;
  setUserId: (userId: number) => void;
}

const PageSize = 6;

const TableUsers: React.FC<Props> = ({ user, setUserId }) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3333/users?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  return (
    <div className="center">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Fullname</th>
            <th>Country</th>
            <th>Number</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.fullname}</td>
                <td>{item.country}</td>
                <td>{item.number}</td>
                <td>{item.gender}</td>
                <td>
                  <div className="grid">
                    <span>
                      <Link to={`/users/edit/${item.id}`}>
                        <EditIcon />
                      </Link>
                    </span>
                    <span onClick={() => setUserId(item.id)}>
                      <DeleteIcon />
                    </span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page: any) => setCurrentPage(page)}
      />
    </div>
  );
};
export default TableUsers;
