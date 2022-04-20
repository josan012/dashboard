import { useState } from "react";
import Style from "./styled";

interface Props {
  active: boolean;
  handlePasswordChange: any;
  handleValidation: any;
  passwordValue: string;
  passwordError: string;
  handleChangeActive: () => void;
}

const PasswordInputField: React.FC<Props> = ({
  active,
  handlePasswordChange,
  handleValidation,
  passwordValue,
  passwordError,
  handleChangeActive,
}) => {
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
      <div className="password-field">
        {active ? (
          <span>
            <i className="pass" onClick={() => showPassword()}></i>
          </span>
        ) : (
          <span>
            <i className="password" onClick={() => showPassword()}></i>
          </span>
        )}
        <input
          type={passwordShown ? "text" : "password"}
          value={passwordValue}
          onChange={handlePasswordChange}
          onKeyUp={handleValidation}
          name="password"
          placeholder="Password"
          className="form-control"
        />
        <p className="error">{passwordError}</p>
      </div>
    </Style>
  );
};
export default PasswordInputField;
