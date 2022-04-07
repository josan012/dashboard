import { useState } from "react";
import { Link } from "react-router-dom";
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
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Country" />
                <input type="text" placeholder="Phone Number" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
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
                  <Button>
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
