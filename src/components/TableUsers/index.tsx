import Style from "./styled";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import EditIcon from "../../icons/EditIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import { User } from "../../interfaces";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@material-ui/core/Paper";

interface Props {
  user: User[];
  onSuccess: () => void;
  setUserId: (postId: number) => void;
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
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <Style>
      <div className="center">
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <TableContainer component={Paper}>
          <Table aria-label="users table">
            <TableHead>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Full Name</TableCell>
              <TableCell align="center">Country</TableCell>
              <TableCell align="center">Number</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableHead>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, i) => {
                return (
                  <TableBody>
                    <TableRow key={i}>
                      <TableCell align="center">{user.id}</TableCell>
                      <TableCell align="center">{user.fullname}</TableCell>
                      <TableCell align="center">{user.country}</TableCell>
                      <TableCell align="center">{user.number}</TableCell>
                      <TableCell align="center">{user.email}</TableCell>
                      <TableCell align="center">{user.gender}</TableCell>
                      <TableCell className="icon">
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
                      </TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>
    </Style>
  );
};
export default TableUsers;
