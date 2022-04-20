/* eslint-disable jsx-a11y/anchor-is-valid */
import Style from "./styled";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import users from "../../users.json";
import Dashboard from "../Dashboard";

interface errorMessages {
  name: string;
  message: string;
}

// pentru a ne conecta folosim contul
// email:    vlad.popovschii@gmail.com
// parola:   abcd1234A@

const Sign: React.FC = () => {
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

  const handleSubmit = (event: any) => {
    event.preventDefault();

    let { email, password } = document.forms[0];

    // Find user login info
    const userData = users.users.find(
      (user: any) => user.email === email.value
    );

    // Compare user info
    if (userData) {
      if (userData.password !== password.value) {
        // Invalid password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "email", message: errors.email });
    }
  };

  const renderErrorMessage = (name: any) =>
    name === errorMessages?.name && (
      <div className="error">{errorMessages?.message}</div>
    );
  console.log(errorMessages?.message);

  return (
    <Style>
      <div className="center">
        {isSubmitted ? (
          <Dashboard />
        ) : (
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
        )}
      </div>
    </Style>
  );
};
export default Sign;
