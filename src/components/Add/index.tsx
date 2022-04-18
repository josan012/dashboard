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

  const [fullname, setFullname] = useState(false);
  function inputHandlerFullname(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [e.target.name]: e.target.value });
    setFullname(Boolean(e.target.value));
  }

  const [country, setCountry] = useState(false);
  function inputHandlerCountry(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [e.target.name]: e.target.value });
    setCountry(Boolean(e.target.value));
  }

  const [number, setNumber] = useState(false);
  function inputHandlerNumber(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [e.target.name]: e.target.value });
    setNumber(Boolean(e.target.value));
  }

  const [email, setEmail] = useState(false);
  function inputHandlerEmail(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [e.target.name]: e.target.value });
    setEmail(Boolean(e.target.value));
  }

  const [gender, setGender] = useState(false);
  function genderHandler(e: ChangeEvent<HTMLSelectElement>) {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.value !== "none") setGender(Boolean(e.target.value));
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
                  onChange={(e) => inputHandlerFullname(e)}
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  onChange={(e) => inputHandlerCountry(e)}
                />
                <input
                  type="text"
                  name="number"
                  placeholder="Phone Number"
                  onChange={(e) => inputHandlerNumber(e)}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  onChange={(e) => inputHandlerEmail(e)}
                />
                <div className="gender">
                  <select
                    id="genderselect"
                    name="gender"
                    onChange={(e) => genderHandler(e)}
                  >
                    <option
                      value="none"
                      selected
                      disabled
                      label="Select Gender"
                    >
                      Select Gender
                    </option>
                    <option value="male" label="Male">
                      Male
                    </option>
                    <option value="female" label="Female">
                      Female
                    </option>
                    <option value="other" label="Other">
                      other
                    </option>
                  </select>
                </div>
                <div className="submit">
                  <Button
                    type="submit"
                    className="edit"
                    onClick={(e) => onFormSubmit(e)}
                    disabled={
                      !fullname || !country || !number || !email || !gender
                    }
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
