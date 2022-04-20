/* eslint-disable jsx-a11y/anchor-is-valid */
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Style from "./styled";
import Button from "@mui/material/Button";
import PasswordInputField from "../../components/PasswordInputField";
import ConfirmPasswordInputField from "../../components/ConfirmPasswordInputField";

const Registration: React.FC = () => {
  const [user, setUser] = useState({
    fullname: "",
    country: "",
    number: "",
    email: "",
    gender: "",
    password: "",
  });

  async function onFormSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3333/users`, user);
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.log("Something is Wrong");
    }
  }

  const [passwordError, setPasswordErr] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordInput, setPasswordInput] = useState({
    password: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const passwordInputValue = event.target.value.trim();
    const passwordInputFieldName = event.target.name;
    const NewPasswordInput = {
      ...passwordInput,
      [passwordInputFieldName]: passwordInputValue,
    };
    setPasswordInput(NewPasswordInput);
  };
  const handleValidation = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const passwordInputValue = event.target.value.trim();
    const passwordInputFieldName = event.target.name;

    if (passwordInputFieldName === "password") {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*+-])/;
      const minLengthRegExp = /.{8,}/;
      const passwordLength = passwordInputValue.length;
      const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
      const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
      const digitsPassword = digitsRegExp.test(passwordInputValue);
      const specialCharPassword = specialCharRegExp.test(passwordInputValue);
      const minLengthPassword = minLengthRegExp.test(passwordInputValue);
      let errMsg = "";
      if (passwordLength === 0) {
        errMsg = "Password is empty";
      } else if (!uppercasePassword) {
        errMsg = "At least one Uppercase";
      } else if (!lowercasePassword) {
        errMsg = "At least one Lowercase";
      } else if (!digitsPassword) {
        errMsg = "At least one digit";
      } else if (!specialCharPassword) {
        errMsg = "At least one Special Characters";
      } else if (!minLengthPassword) {
        errMsg = "At least minumum 8 characters";
      } else {
        errMsg = "";
      }
      setPasswordErr(errMsg);
    }

    if (
      passwordInputFieldName === "confirmPassword" ||
      (passwordInputFieldName === "password" &&
        passwordInput.confirmPassword.length > 0)
    ) {
      if (passwordInput.confirmPassword !== passwordInput.password) {
        setConfirmPasswordError("Confirm password is not matched");
      } else {
        setConfirmPasswordError("");
      }
    }

    setUser((preventState) => ({
      ...preventState,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(user);
  const [fullname, setFullname] = useState(false);
  const inputHandlerFullname = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((preventState) => ({
      ...preventState,
      [e.target.name]: e.target.value,
    }));
    setFullname(Boolean(e.target.value));
  };

  const [country, setCountry] = useState(false);
  const inputHandlerCountry = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((preventState) => ({
      ...preventState,
      [e.target.name]: e.target.value,
    }));
    setCountry(Boolean(e.target.value));
  };

  const [number, setNumber] = useState(false);
  const inputHandlerNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((preventState) => ({
      ...preventState,
      [e.target.name]: e.target.value,
    }));
    setNumber(Boolean(e.target.value));
  };

  const [email, setEmail] = useState(false);
  const inputHandlerEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((preventState) => ({
      ...preventState,
      [e.target.name]: e.target.value,
    }));
    setEmail(Boolean(e.target.value));
  };

  const [gender, setGender] = useState(false);
  const genderHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setUser((preventState) => ({
      ...preventState,
      [e.target.name]: e.target.value,
    }));
    if (e.target.value !== "none") setGender(Boolean(e.target.value));
  };

  const [yearsscheck, setAgreeyears] = useState(false);
  const checkboxHandleryears = (e: ChangeEvent<HTMLInputElement>) => {
    setAgreeyears(Boolean(e.target.value));
  };
  const [thermscheck, setAgreetherms] = useState(false);
  const checkboxHandlertherms = (e: ChangeEvent<HTMLInputElement>) => {
    setAgreetherms(Boolean(e.target.value));
  };

  const [active, setActive] = useState(false);
  const [confirmActive, setConfirmActive] = useState(false);

  const handleChangeActive = () => {
    setActive((previousEye) => !previousEye);
  };

  const handleConfirmChangeActive = () => {
    setConfirmActive((previousConfirmEye) => !previousConfirmEye);
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

                <div className="parola">
                  <PasswordInputField
                    handleChangeActive={handleChangeActive}
                    active={active}
                    handlePasswordChange={handlePasswordChange}
                    handleValidation={handleValidation}
                    passwordValue={passwordInput.password}
                    passwordError={passwordError}
                  />
                  <ConfirmPasswordInputField
                    confirmActive={confirmActive}
                    handleConfirmChangeActive={handleConfirmChangeActive}
                    handlePasswordChange={handlePasswordChange}
                    handleValidation={handleValidation}
                    confirmPasswordValue={passwordInput.confirmPassword}
                    confirmPasswordError={confirmPasswordError}
                  />
                </div>
                <div className="check">
                  <label>
                    <input
                      id="checkid"
                      type="checkbox"
                      onChange={checkboxHandleryears}
                    />
                    I am 18 years old or older
                  </label>
                </div>
                <div className="check">
                  <label>
                    <input
                      id="checkid"
                      type="checkbox"
                      onChange={checkboxHandlertherms}
                    />
                    Agree with
                    <span className="terms">
                      <a href="#"> Terms &#38; Condition</a>
                    </span>
                  </label>
                </div>
                <div className="submit">
                  <Button
                    type="submit"
                    disabled={
                      !fullname ||
                      !country ||
                      !number ||
                      !email ||
                      !gender ||
                      !yearsscheck ||
                      !thermscheck
                    }
                    onClick={(e) => onFormSubmit(e)}
                  >
                    {console.log(
                      !fullname,
                      !country,
                      !number,
                      !email,
                      !gender,
                      !yearsscheck,
                      !thermscheck
                    )}
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
