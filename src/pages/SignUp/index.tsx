import {
  Button,
  Form,
  Input,
  InputPhone,
  useForm,
  Radio,
  Checkbox,
} from "ebs-design";
import Style from "./styled";
import PasswordInput from "../../components/PasswordInput";
import { ChangeEvent, useEffect, useState } from "react";
import { User } from "../../interfaces";
import axios from "axios";
import { useAddUserData } from "../../hooks/useUsersData";

import ConfirmPasswordInput from "../../components/ConfirmPasswordInput";
import Sign from "../Sign";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const [form] = useForm();

  const history = useNavigate();

  useEffect(() => {
    console.log(form.getFieldsValue());
  }, [form]);

  const [success, setSuccess] = useState(false);

  const handlerSubmit = async (data: User) => {
    try {
      await axios.post(`http://localhost:3333/users`, data);
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.log("Something is Wrong");
    }
    setSuccess(true);
  };

  const [passwordError, setPasswordErr] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordInput, setPasswordInput] = useState({
    password: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const passwordInputValue = event.target.value.trim();
    const passwordInputFieldName = event.target.name;
    const NewPasswordInput = {
      ...passwordInput,
      [passwordInputFieldName]: passwordInputValue,
    };
    setPasswordInput(NewPasswordInput);
  };
  const handleValidation = (event: ChangeEvent<HTMLInputElement>) => {
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
  };

  const { mutate: addUser } = useAddUserData();

  const handleAddUserClick = (data: User) => {
    addUser(data);
    setSuccess(true);
    history("/sign");
  };

  return (
    <Style>
      <div className="center">
        <div className="form">
          <Form
            form={form}
            onFinish={handleAddUserClick}
            controlOptions={{
              col: {
                size: 8,
              },
            }}
            labelOptions={{
              col: {
                size: 3,
              },
            }}
            type="vertical"
          >
            <Form.Field
              label="Fullname:"
              name="fullname"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input size="small" />
            </Form.Field>
            <Form.Field
              label="Country:"
              name="country"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input size="small" />
            </Form.Field>
            <Form.Field
              extra="This field is required"
              label="Email:"
              name="email"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input type="email" className="email" />
            </Form.Field>

            <Form.Field
              extra="This field is required"
              label="Gender:"
              name="gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Radio
                options={[
                  {
                    text: "Male",
                    value: "male",
                  },
                  {
                    text: "Female",
                    value: "female",
                  },
                ]}
              />
            </Form.Field>
            <Form.Field
              rules={[
                {
                  required: true,
                },
              ]}
              extra="This field is required"
              label="Number:"
              name="number"
            >
              <InputPhone country="md" />
            </Form.Field>
            <Form.Field
              extra="This field is required"
              label="Password:"
              name="password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <PasswordInput
              // handlePasswordChange={handlePasswordChange}
              // handleValidation={handleValidation}
              // passwordValue={passwordInput.password}
              // passwordError={passwordError}
              />
            </Form.Field>
            <Form.Field
              rules={[
                {
                  required: true,
                },
              ]}
              extra="This field is required"
              label="Confirm Password:"
              name="confirmpassword"
            >
              <ConfirmPasswordInput
              // handlePasswordChange={handlePasswordChange}
              // handleValidation={handleValidation}
              // confirmPasswordValue={passwordInput.confirmPassword}
              // confirmPasswordError={confirmPasswordError}
              />
            </Form.Field>
            <Form.Field
              rules={[
                {
                  required: true,
                },
              ]}
              extra="This field is required"
              name="years"
            >
              <Checkbox text="I am 18 years old or older " />
            </Form.Field>
            <Form.Field
              rules={[
                {
                  required: true,
                },
              ]}
              extra="This field is required"
              name="confirm"
            >
              <Checkbox text="Sunt deacord cu prelucrarea datelor personale" />
            </Form.Field>
            <Button size="medium" type="fill" className="submit" submit={true}>
              Sign Up
            </Button>
          </Form>
        </div>
      </div>
    </Style>
  );
};
export default SignUp;
