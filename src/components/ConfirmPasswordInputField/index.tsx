import { useState } from "react";
import Style from "./styled";

interface Props {
  handlePasswordChange: any;
  handleValidation: any;
  confirmPasswordValue: string;
  confirmPasswordError: string;
  confirmActive: boolean;
  handleConfirmChangeActive: () => void;
}

const PasswordInputField: React.FC<Props> = ({
  handleValidation,
  handlePasswordChange,
  confirmPasswordValue,
  confirmPasswordError,
  confirmActive,
  handleConfirmChangeActive,
}) => {
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };
  const showConfirmPassword = () => {
    toggleConfirmPassword();
    handleConfirmChangeActive();
  };
  return (
    <Style>
      <div className="confirm--password">
        {confirmActive ? (
          <span>
            <i
              className="confirm-pass"
              onClick={() => showConfirmPassword()}
            ></i>
          </span>
        ) : (
          <span>
            <i
              className="confirm-password"
              onClick={() => showConfirmPassword()}
            ></i>
          </span>
        )}
        <input
          type={confirmPasswordShown ? "text" : "password"}
          value={confirmPasswordValue}
          onChange={handlePasswordChange}
          onKeyUp={handleValidation}
          name="confirmPassword"
          placeholder="Confirm Password"
          className="form-control"
        />
        <p className="error">{confirmPasswordError}</p>
      </div>
    </Style>
  );
};
export default PasswordInputField;
