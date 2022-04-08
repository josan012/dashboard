import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Style from "./styled";
import Button from "@mui/material/Button";

interface Props {
  active: boolean;
  handleChangeActive: () => void;
}

const Registration: React.FC<Props> = ({ active, handleChangeActive }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const showPassword = () => {
    togglePassword();
    handleChangeActive();
  };

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
      await axios.post(`http://localhost:3333/users`, user);
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
              <p className="signup">Sign Up</p>
              <p className="already">
                Already have an account?
                <span className="terms">
                  <Link to="/sign">Sign In</Link>
                </span>
              </p>
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
                <div className="password-field">
                  {active ? (
                    <span>
                      <i className="pass" onClick={() => showPassword()}></i>
                    </span>
                  ) : (
                    <span>
                      <i
                        className="password"
                        onClick={() => showPassword()}
                      ></i>
                    </span>
                  )}
                  <input
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="check">
                  <label>
                    <input id="checkid" type="checkbox" />I am 18 years old or
                    older
                  </label>
                </div>
                <div className="check">
                  <label>
                    <input id="checkid" type="checkbox" />
                    Agree with
                    <span className="terms">
                      <a href="#"> Terms &#38; Condition</a>
                    </span>
                  </label>
                </div>
                <div className="submit">
                  <Button type="submit" onClick={(e) => onFormSubmit(e)}>
                    <Link to="/sign" className="link">
                      Sign Up
                    </Link>
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
export default Registration;
