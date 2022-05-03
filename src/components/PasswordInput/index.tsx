import { ChangeEvent, useState } from "react";
import { Input } from "ebs-design";
import { InputProps } from "ebs-design/dist/components/atoms/Input/Input";
import "./style.scss";
import Cut from "../../eyeoff.svg";
import Eye from "../../eye.svg";

// interface Props {
//   handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
//   handleValidation: (e: ChangeEvent<HTMLInputElement>) => void;
//   passwordValue: string;
//   passwordError: string;
// }

const PasswordInput: React.FC = ({ type, ...props }: InputProps) =>
  // {
  //   handlePasswordChange,
  //   handleValidation,
  //   passwordValue,
  //   passwordError,
  // }: Props
  {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const onShowPasswordChange = () =>
      setShowPassword((prevState) => !prevState);

    return (
      <div className="password">
        <Input
          // value={passwordValue}
          // onChange={handlePasswordChange}
          // onKeyUp={handleValidation}
          type={showPassword ? "text" : "password"}
          {...props}
          suffix={
            showPassword ? (
              <img src={Cut} alt="cut-eye" onClick={onShowPasswordChange} />
            ) : (
              <img src={Eye} alt="eye" onClick={onShowPasswordChange} />
            )
          }
        />
        {/* <p className="error">{passwordError}</p> */}
      </div>
    );
  };
export default PasswordInput;
