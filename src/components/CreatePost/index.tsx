import { ChangeEvent, useState } from "react";
import axios from "axios";
import Style from "./styled";
import Button from "@mui/material/Button";

interface AddProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: () => void;
}

const CreatePost: React.FC<AddProps> = ({ setIsOpen, onSuccess }) => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    date: "",
    user: "",
  });

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

  async function onFormSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    try {
      await axios
        .post(`http://localhost:4444/posts`, post)
        .then(() => onSuccess());
      setIsOpen(false);
    } catch (error: any) {
      console.log(error.response.status, error);
    }
  }

  return (
    <Style>
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
                  onChange={(e) => onTextFieldChange(e)}
                />
                <textarea
                  name="description"
                  id="description"
                  placeholder="Description"
                  cols={30}
                  rows={5}
                  onChange={(event) => onTextAreaChange(event)}
                ></textarea>
                <input
                  type="text"
                  name="date"
                  placeholder="Date"
                  onChange={(e) => onTextFieldChange(e)}
                />
                <input
                  type="text"
                  name="user"
                  id="user"
                  placeholder="User"
                  onChange={(e) => onTextFieldChange(e)}
                />

                <div className="submit">
                  <Button
                    type="submit"
                    className="edit"
                    onClick={(e) => onFormSubmit(e)}
                  >
                    Create Post
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
export default CreatePost;
