/* eslint-disable jsx-a11y/anchor-is-valid */
import Style from "./styled";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import PanelDashboard from "../PanelDashboard";
import {
  clearAuthTokens,
  getAccessToken,
  getRefreshToken,
  isLoggedIn,
  setAuthTokens,
} from "axios-jwt";
import axios from "axios";

interface errorMessages {
  name: string;
  message: string;
}

// pentru a ne conecta folosim contul
// email:    vlad.popovschii@gmail.com
// parola:   abcd1234A@

const Sign: React.FC = () => {
  const history = useNavigate();

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

  const [errorMessages, setErrorMessages] = useState<errorMessages>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    email: "invalid email",
    password: "invalid password",
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    let IDvalue = "";
    let { email, password } = document.forms[0];
    let res = await axios.get("http://localhost:3333/users");
    let data = res.data;
    const userData = data.find((user: any) => user.email === email.value);

    if (userData) {
      if (userData.password !== password.value) {
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setIsSubmitted(true);
        history("/dashboard");
        IDvalue = userData.id;

        setAuthTokens({
          accessToken: IDvalue,
          refreshToken: data.refresh_token,
        });
      }
    } else {
      setErrorMessages({ name: "email", message: errors.email });
    }
  };

  const renderErrorMessage = (name: any) =>
    name === errorMessages?.name && (
      <div className="error">{errorMessages?.message}</div>
    );

  return (
    <Style>
      {isSubmitted ? (
        <PanelDashboard />
      ) : (
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
            <form onSubmit={handleSubmit}>
              <div className="email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  onChange={getData}
                  required
                />
              </div>
              {renderErrorMessage("email")}
              <div className="password">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              {renderErrorMessage("password")}
              <div className="forgot">
                <span>
                  <a href="#">Forgot Password?</a>
                </span>
              </div>
              <div className="submit">
                <Button type="submit">Sign In</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Style>
  );
};
export default Sign;
