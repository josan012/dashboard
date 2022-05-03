import "./style.scss";
import DeleteIcon from "../../icons/DeleteIcon";
import { Link } from "react-router-dom";
import { Post } from "../../interfaces";

interface Props {
  post: Post;
  title: string;
  description: string;
  date: string;
  user: string;
  image: string;
  setPostId: (postId: number) => void;
}

const Widget: React.FC<Props> = ({
  title,
  description,
  date,
  user,
  image,
  post,
  setPostId,
}) => {
  const deleteContent = () => {
    setPostId(post.id);
    console.log(post.id);
  };
  return (
    <div className="widget">
      <h1>{title}</h1>
      <p>{description}</p>
      <span className="date">{date}</span>
      <span className="util">{user}</span>
      <div className="image">
        <img src={image} alt="imagine" />
      </div>
      <div className="actions">
        <span className="edit--link">
          <Link to={`/posts/edit/${post.id}`}>Editare</Link>
        </span>
        <div className="delete" onClick={deleteContent}>
          Stergere <DeleteIcon />
        </div>
      </div>
    </div>
  );
};
export default Widget;
