import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Style from "./styled";
import Button from "@mui/material/Button";

const EditPage = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [user, setUser] = useState({
    fullname: "",
    country: "",
    number: "",
    email: "",
    gender: "",
  });

  useEffect(() => {
    async function getUser() {
      try {
        const user = await axios.get(`http://localhost:3333/users/${id}`);
        setUser(user.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getUser();
  }, [id]);

  async function onFormSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3333/users/${id}`, user);
      history("/");
    } catch (error) {
      console.log("Something is Wrong");
    }
  }

  function onTextFieldChange(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  }

  function onSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  }

  return (
    <Style>
      <div className="center">
        <div className="vertical">
          <div className="form">
            <div className="title">
              <p className="signup">Edit</p>
            </div>
            <div className="center">
              <form>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullname"
                  value={user.fullname}
                  onChange={(e) => onTextFieldChange(e)}
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={user.country}
                  onChange={(e) => onTextFieldChange(e)}
                />
                <input
                  type="text"
                  name="number"
                  placeholder="Phone Number"
                  value={user.number}
                  onChange={(e) => onTextFieldChange(e)}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  value={user.email}
                  onChange={(e) => onTextFieldChange(e)}
                />
                <div className="gender">
                  <select
                    id="genderselect"
                    name="gender"
                    value={user.gender}
                    onChange={(e) => onSelectChange(e)}
                  >
                    <option value="none" selected>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                  </select>
                </div>
                <div className="submit">
                  <Button
                    type="submit"
                    className="edit"
                    onClick={(e) => onFormSubmit(e)}
                  >
                    <Link to="/">Edit</Link>
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
export default EditPage;
