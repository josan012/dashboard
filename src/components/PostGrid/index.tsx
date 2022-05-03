import "./style.scss";
import Widget from "../Widget";
import { useEffect, useState } from "react";
import { Post } from "../../interfaces";
import axios from "axios";
import Dialog from "../Dialog";
import { useQuery } from "react-query";

const PostGrid = () => {
  const [postId, setPostId] = useState<number | null>(null);

  const [query, setQuery] = useState("");

  const [content, setContent] = useState<Post[]>([]);
  const fetchData = async () => {
    const res = await axios.get(`http://localhost:4444/posts?q=${query}`);
    setContent(res.data);
  };
  useEffect(() => {
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  const { status } = useQuery("posts", fetchData);
  return (
    <div className="center">
      <p>{status}</p>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <div className="grid">
          <div className="row">
            {content.map((post, i) => {
              return (
                <Widget
                  post={post}
                  setPostId={setPostId}
                  key={i}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  user={post.user}
                  image={post.image}
                />
              );
            })}
          </div>
        </div>
      )}
      {postId && (
        <div className="confirm">
          <Dialog
            setPostId={(val) => setPostId(val === null ? val : postId)}
            postId={postId}
          />
        </div>
      )}
    </div>
  );
};
export default PostGrid;
