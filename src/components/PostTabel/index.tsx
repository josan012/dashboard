import { IconButton } from "@mui/material";
import Style from "./styled";
import EditIcon from "../../icons/EditIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import { Link } from "react-router-dom";
import { Post } from "../../interfaces";
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

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
          <Table aria-label="posts table">
            <TableHead>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">User</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableHead>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((post, i) => {
                return (
                  <TableBody>
                    <TableRow key={i}>
                      <TableCell align="center">{post.id}</TableCell>
                      <TableCell align="center">{post.title}</TableCell>
                      <TableCell align="center">{post.description}</TableCell>
                      <TableCell align="center">{post.date}</TableCell>
                      <TableCell align="center">{post.user}</TableCell>
                      <TableCell align="center" className="icon">
                        <div className="grid">
                          <IconButton className="icon" aria-label="Edit">
                            <Link to={`/posts/edit/${post.id}`}>
                              <EditIcon />
                            </Link>
                          </IconButton>
                          <IconButton
                            className="icon"
                            aria-label="Delete"
                            onClick={() => setPostId(post.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}
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
export default PostTabel;
