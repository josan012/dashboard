import Style from "./styled";
import { Link } from "react-router-dom";
import EditIcon from "../../icons/EditIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import { User } from "../../interfaces";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Table } from "ebs-design";
import Pagination from "../Pagination";

interface Props {
  user: User[];
  onSuccess: () => void;
  setUserId: (userId: number) => void;
}

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

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const PageSize = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <Style>
      <div className="center">
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <div className="storybook-rows">
          <div className="storybook-row">
            <div className="storybook-header"></div>
            <div className="storybook-row-item">
              <div className="storybook-label"></div>
              <Table
                columns={[
                  {
                    dataIndex: "fullname",
                    title: "fullname",
                  },
                  {
                    dataIndex: "country",
                    title: "country",
                  },
                  {
                    dataIndex: "number",
                    title: "number",
                  },
                  {
                    dataIndex: "email",
                    title: "email",
                  },
                  {
                    dataIndex: "gender",
                    title: "gender",
                  },
                  {
                    title: "action",
                    render: (item) => (
                      <div>
                        <span>
                          <Link to={`/users/edit/${item.id}`}>
                            <EditIcon />
                          </Link>
                        </span>
                        <span onClick={() => setUserId(item.id)}>
                          <DeleteIcon />
                        </span>
                      </div>
                    ),
                  },
                ]}
                data={data}
                size="large"
              />
            </div>
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page: any) => setCurrentPage(page)}
        />
      </div>
    </Style>
  );
};
export default TableUsers;
