import Style from "./styled";
import { Link } from "react-router-dom";

const Sign = () => {
  return (
    <Style>
      <div className="center">
        <div className="form">
          <div className="title">
            <p className="signin">Sign In</p>
            <p className="already">
              Do not have an account?
              <span className="sign-up">
                <Link to="/">Sign Up</Link>
              </span>
            </p>
          </div>
          <div className="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
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
            <input type="submit" value="Sign Up" />
          </div>
        </div>
      </div>
    </Style>
  );
};
export default Sign;
