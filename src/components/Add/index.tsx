import { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";
import { Button, Form, Input, InputPhone, useForm, Radio } from "ebs-design";
import { User } from "../../interfaces";

interface AddProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: () => void;
}

const Add: React.FC<AddProps> = ({ setIsOpen, onSuccess }) => {
  const [user, setUser] = useState({
    fullname: "",
    country: "",
    number: "",
    email: "",
  });

  const [form] = useForm();

  useEffect(() => {
    console.log(form.getFieldsValue());
  }, [form]);

  const handlerSubmit = async (data: User) => {
    console.log(data);
    try {
      await axios.post(`http://localhost:3333/users`, data);
      localStorage.setItem("user", JSON.stringify(data));
      setIsOpen(false);
      onSuccess();
    } catch (error) {
      console.log("Something is Wrong");
    }
  };

  return (
    <div className="center">
      <div className="vertical">
        <div className="form">
          <Form
            form={form}
            onFinish={handlerSubmit}
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
              <Input type="email" />
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
            <Button size="medium" type="fill" className="submit" submit={true}>
              Add User
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Add;
