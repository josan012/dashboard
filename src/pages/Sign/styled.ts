import styled from "@emotion/styled";

export const Style = styled.div`
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form {
    width: 500px;
    height: fit-content;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
  }

  .signin {
    font-weight: bold;
    display: inline-block;
    margin-right: auto;
  }

  .already {
    display: inline-flex;
    align-items: baseline;
    justify-content: flex-end;
    color: #686868;
  }

  .title {
    width: 80%;
    display: flex;
    margin: 0 auto;
  }

  span {
    margin-left: 5px;
    color: #2196f3;
  }

  input {
    width: 80%;
    padding: 20px 0;
    text-indent: 15px;
    border-radius: 10px;
    height: 20px;
    border: 1px solid #dcdcdc;
    margin-bottom: 10px;
  }

  .email {
    justify-content: center;
    text-align: center;
  }

  .password {
    text-align: center;
  }

  .submit {
    position: relative;
    text-align: center;
  }

  .submit:after {
    content: "";
    position: absolute;
    right: 34%;
    top: 12px;
    bottom: 0;
    width: 50px;
    height: 20px;
    background: url("/arrow.svg") no-repeat;
    cursor: pointer;
    z-index: 99999;
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

  .forgot {
    width: 80%;
    margin: 0 auto 10px auto;
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
  .error {
    color: red;
    display: block;
    width: 80%;
    margin: 0 auto 10px auto;
  }

  .email {
    width: 400px;
    margin: 0 auto;
  }

  input[type="email"] {
    margin: 0 10px 0 0;
    width: 400px;
  }
`;
export default Style;
