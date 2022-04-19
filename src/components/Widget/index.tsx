import Style from "./styled";
import DeleteIcon from "../../icons/DeleteIcon";
import { Link } from "react-router-dom";
import { Post } from "../../interfaces";

interface Props {
  post: Post;
  title: string;
  description: string;
  date: string;
  user: string;
  setPostId: (postId: number) => void;
  onSuccess: () => void;
}

const Widget: React.FC<Props> = ({
  title,
  description,
  date,
  user,
  post,
  setPostId,
}) => {
  return (
    <Style>
      <div className="widget">
        <h1>{title}</h1>
        <p>{description}</p>
        <span className="date">{date}</span>
        <span className="util">{user}</span>
        <div className="actions">
          <span className="edit">
            <Link to={`/posts/edit/${post.id}`}>Editare</Link>
          </span>
          <span className="delete" onClick={() => setPostId(post.id)}>
            Stergere <DeleteIcon />
          </span>
        </div>
      </div>
    </Style>
  );
};
export default Widget;
