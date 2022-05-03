import { ChangeEvent, useState } from "react";
import axios from "axios";
import "./style.scss";
import Button from "@mui/material/Button";

interface AddProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreatePost: React.FC<AddProps> = ({ setIsOpen }) => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    date: "",
    user: "",
  });

  const [title, setTitle] = useState(false);
  function inputHandlerTitle(e: ChangeEvent<HTMLInputElement>) {
    setPost({ ...post, [e.target.name]: e.target.value });
    setTitle(Boolean(e.target.value));
  }

  const [description, setDescription] = useState(false);
  function inputHandlerDescription(e: ChangeEvent<HTMLTextAreaElement>) {
    setPost({ ...post, [e.target.name]: e.target.value });
    setDescription(Boolean(e.target.value));
  }

  const [image, setImage] = useState(false);
  function inputHandlerImage(e: ChangeEvent<HTMLInputElement>) {
    setPost({ ...post, [e.target.name]: e.target.value });
    setImage(Boolean(e.target.value));
  }

  const [date, setDate] = useState(false);
  function inputHandlerDate(e: ChangeEvent<HTMLInputElement>) {
    setPost({ ...post, [e.target.name]: e.target.value });
    setDate(Boolean(e.target.value));
  }

  const [user, setUser] = useState(false);
  function inputHandlerUser(e: ChangeEvent<HTMLInputElement>) {
    setPost({ ...post, [e.target.name]: e.target.value });
    setUser(Boolean(e.target.value));
  }

  async function onFormSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:4444/posts`, post);
      setIsOpen(false);
    } catch (error: any) {
      console.log(error.response.status, error);
    }
  }

  return (
    <div className="center">
      <div className="vertical">
        <div className="form">
          <div className="title">
            <p className="signup">Add</p>
          </div>
          <div className="center">
            <form>
              <input
                type="text"
                placeholder="Title"
                name="title"
                className="text"
                onChange={(e) => inputHandlerTitle(e)}
              />
              <textarea
                name="description"
                id="description"
                placeholder="Description"
                cols={30}
                rows={5}
                onChange={(event) => inputHandlerDescription(event)}
              ></textarea>
              <input
                type="date"
                name="date"
                onChange={inputHandlerDate}
                className="text"
              />
              <input
                type="text"
                name="user"
                className="text"
                id="user"
                placeholder="User"
                onChange={(e) => inputHandlerUser(e)}
              />
              <input
                type="text"
                name="image"
                className="text"
                id="image"
                placeholder="Image"
                onChange={(e) => inputHandlerImage(e)}
              />
              <div className="submit">
                <Button
                  type="submit"
                  className="edit--button"
                  onClick={(e) => onFormSubmit(e)}
                  disabled={!title || !description || !date || !user || !image}
                >
                  Create Post
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePost;
