import { IconButton } from "@mui/material";
import Style from "./styled";
import EditIcon from "../../icons/EditIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  user: string;
}

interface Props {
  posts: Post[];
  onSuccess: () => void;
  setPostId: (postId: number) => void;
}

const PostTabel: React.FC<Props> = ({ posts, onSuccess, setPostId }) => {
  return (
    <Style>
      <div className="center">
        <table>
          <thead>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>User</th>
            <th>Action</th>
          </thead>
          {posts.map((post, i) => {
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
