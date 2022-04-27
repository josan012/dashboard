import EditIcon from "../../icons/EditIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import { Link } from "react-router-dom";
import { Post } from "../../interfaces";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import "./style.scss";

const PageSize = 4;

interface Props {
  posts: Post[];
  onSuccess: () => void;
  setPostId: (postId: number) => void;
}

const PostTabel: React.FC<Props> = ({ setPostId }) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:4444/posts?q=${query}`);
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
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Date</th>
          <th>User</th>
          <th>Action</th>
        </thead>
        <tbody>
          {currentTableData.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.date}</td>
                <td>{item.user}</td>
                <td>
                  <div className="grid">
                    <span>
                      <Link to={`/posts/edit/${item.id}`}>
                        <EditIcon />
                      </Link>
                    </span>
                    <span onClick={() => setPostId(item.id)}>
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
export default PostTabel;
