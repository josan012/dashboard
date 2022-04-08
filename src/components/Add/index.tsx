import { ChangeEvent, useState } from "react";
import axios from "axios";
import Style from "./styled";
import Button from "@mui/material/Button";

interface AddProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: () => void;
}

const Add: React.FC<AddProps> = ({ setIsOpen, onSuccess }) => {
  const [user, setUser] = useState({
    fullname: "",
    country: "",
    number: "",
    email: "",
  });

  function onTextFieldChange(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  }

  async function onFormSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    try {
      await axios
        .post(`http://localhost:3333/users`, user)
        .then(() => onSuccess());
      setIsOpen(false);
    } catch (error) {
      console.log("Something is Wrong");
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
                  placeholder="Full Name"
                  name="fullname"
                  onChange={(e) => onTextFieldChange(e)}
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  onChange={(e) => onTextFieldChange(e)}
                />
                <input
                  type="text"
                  name="number"
                  placeholder="Phone Number"
                  onChange={(e) => onTextFieldChange(e)}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  onChange={(e) => onTextFieldChange(e)}
                />

                <div className="submit">
                  <Button
                    type="submit"
                    className="edit"
                    onClick={(e) => onFormSubmit(e)}
                  >
                    Add
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
export default Add;
