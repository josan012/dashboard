import { IconButton } from "@mui/material";
import Style from "./styled";
import EditIcon from "../../icons/EditIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import { Link } from "react-router-dom";
import { Post } from "../../interfaces";
import { useEffect, useState } from "react";
import axios from "axios";

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
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>User</th>
            <th>Action</th>
          </thead>
          {data.map((post, i) => {
            return (
              <tbody>
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{post.title}</td>
                  <td>{post.description}</td>
                  <td>{post.date}</td>
                  <td>{post.user}</td>
                  <td className="icon">
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
export default PostTabel;
