/* eslint-disable jsx-a11y/anchor-is-valid */
import Style from "./styled";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

const Sign = () => {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val: any) {
    console.warn(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }

  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(data));
  }, [data]);
  return (
    <Style>
      <div className="center">
        <div className="form">
          <div className="title">
            <p className="signin">Sign In</p>
            <p className="already">
              Do not have an account?
              <span className="sign-up">
                <Link to="/registration">Sign Up</Link>
              </span>
            </p>
          </div>
          <div className="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              onChange={getData}
            />
          </div>
          <div className="password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="forgot">
            <span>
              <a href="#">Forgot Password?</a>
            </span>
          </div>
          <div className="submit">
            <Button>
              <Link to="/" className="link">
                Sign In
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Style>
  );
};
export default Sign;
