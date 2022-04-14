import styled from "@emotion/styled";

export const Style = styled.div`
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .vertical {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .form {
    width: 600px;
  }

  .signup {
    font-weight: bold;
    display: inline-block;
    margin-right: auto;
  }

  .already {
    display: inline-flex;
    align-items: baseline;
    justify-content: flex-end;
    color: #dcdcdc;
  }

  .title {
    width: 80%;
    display: flex;
    margin: 0 auto;
  }

  span {
    color: #2196f3;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    display: block;
    margin: 0 auto;
    width: 80%;
    padding: 20px 0;
    text-indent: 15px;
    border-radius: 10px;
    height: 20px;
    border: 1px solid #dcdcdc;
    margin-bottom: 10px;
  }

  select {
    display: block;
    margin: 0 auto;
    width: 80%;
    height: 60px;
    margin-bottom: 10px;
    text-indent: 5px;
    border-radius: 10px;
    background-color: white;
  }

  .pass,
  .confirm-pass {
    display: block;
    position: relative;
  }

  .password:after {
    content: "";
    position: absolute;
    margin-top: 18px;
    margin-left: 37%;
    width: 25px;
    height: 20px;
    background: url("/eye.svg");
    cursor: pointer;
  }

  .pass:after {
    content: "";
    position: absolute;
    margin-top: 18px;
    margin-left: 84%;
    width: 25px;
    height: 20px;
    background: url("/eyeoff.svg");
    cursor: pointer;
  }

  .confirm-password:after {
    content: "";
    position: absolute;
    margin-top: 18px;
    margin-left: 37%;
    width: 25px;
    height: 20px;
    background: url("/eye.svg");
    cursor: pointer;
  }

  .confirm-pass:after {
    content: "";
    position: absolute;
    margin-top: 18px;
    margin-left: 84%;
    width: 25px;
    height: 20px;
    background: url("/eyeoff.svg");
    cursor: pointer;
  }

  .pasword-field {
    width: 80%;
    height: auto;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin: 0 5px 0 0;
    display: inline-flex;
    align-items: center;
  }

  label {
    display: inline-flex;
    vertical-align: center;
  }

  .check {
    display: flex;
    width: 80%;
    margin: 0 auto 15px;
    align-items: baseline;
  }

  .terms {
    display: inline-flex;
    align-items: baseline;
    margin-left: 5px;
  }

  input[type="submit"] {
    width: 80%;
    display: block;
    margin: 0 auto;
    padding: 10px 0 15px;
    background-color: #2196f3;
    color: white;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
  }

  .submit {
    position: relative;
  }

  .submit:after {
    content: "";
    position: absolute;
    right: 37%;
    top: 12px;
    bottom: 0;
    width: 50px;
    height: 20px;
    background: url("/arrow.svg") no-repeat;
    cursor: pointer;
    z-index: 99999;
  }

  a:link {
    color: #2196f3;
    text-decoration: none;
  }

  a:visited {
    color: #2196f3;
  }

  a:active {
    color: #2196f3;
  }

  .link {
    width: 100%;
    display: block;
    color: white;
    height: 20px;
  }

  .link:visited {
    color: white;
  }

  .link:hover {
    color: #2196f3;
  }

  Button {
    width: 80%;
    display: block;
    margin: 0 auto;
    padding: 10px 0 10px 0;
    background-color: #2196f3;
    color: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    text-transform: capitalize;
  }

  Button:hover {
    color: #2196f3;
    background-color: white;
  }
`;
export default Style;
