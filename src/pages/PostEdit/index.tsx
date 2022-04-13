import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Style from "./styled";
import Button from "@mui/material/Button";

const PostEdit = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
    date: "",
    user: "",
  });

  useEffect(() => {
    async function getPost() {
      try {
        const post = await axios.get(`http://localhost:4444/posts/${id}`);
        setPost(post.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getPost();
  }, [id]);

  async function onFormSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4444/posts/${id}`, post);
      history("/");
    } catch (error) {
      console.log("Something is Wrong");
    }
  }

  function onTextFieldChange(e: ChangeEvent<HTMLInputElement>) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
    console.log(post);
  }
  function onTextAreaChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
    console.log(post);
  }
  return (
    <Style>
      <div className="center">
        <div className="vertical">
          <div className="form">
            <div className="title">
              <p className="signup">Edit</p>
            </div>
            <div className="center">
              <form>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={post.title}
                  onChange={(e) => onTextFieldChange(e)}
                />
                <textarea
                  id="description"
                  cols={30}
                  rows={10}
                  name="description"
                  placeholder="description"
                  value={post.description}
                  onChange={(event) => onTextAreaChange(event)}
                ></textarea>
                <input
                  type="text"
                  name="date"
                  placeholder="Phone date"
                  value={post.date}
                  onChange={(e) => onTextFieldChange(e)}
                />
                <input
                  type="text"
                  name="user"
                  id="user"
                  placeholder="User"
                  value={post.user}
                  onChange={(e) => onTextFieldChange(e)}
                />

                <div className="submit">
                  <Button
                    type="submit"
                    className="edit"
                    onClick={(e) => onFormSubmit(e)}
                  >
                    <Link to="/">Edit</Link>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
};
export default PostEdit;