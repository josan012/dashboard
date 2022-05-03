import styled from "@emotion/styled";

export const Style = styled.div`
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ebs-button__wrapper,
  .ebs-button--medium,
  .submit {
    width: 100%;
    height: fit-content;
    color: #0288d1;
    background-color: #fff;
    text-align: center;
  }
  .ebs-input,
  .ebs-input,
  .ebs-input--small,
  .ebs-input--medium,
  input[type="text"],
  input[type="email"] {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .field {
    margin: 0;
    width: 100%;
  }

  .ebs-input__container,
  .ebs-input__phone,
  .react-tel-input {
    width: 400px;
  }

  .ebs-form__field__explain,
  .ebs-form__field__extra {
    width: 400px;
    margin-left: 60px;
  }

  .col,
  .ebs-form__field__control,
  .col-8 {
    padding-left: 0;
  }

  .ebs-checkbox__wrapper,
  .ebs-checkbox--left,
  .has-text {
    width: 400px;
  }

  .ebs-input__suffix,
  .not-clickable,
  img {
    width: 25px;
    height: 25px;
  }

  .ebs-button__wrapper:hover,
  .ebs-button--medium:hover,
  .submit:hover {
    color: #fff;
    background-color: #0288d1;
  }

  .ebs-input .ebs-input--medium .email {
    margin-left: 40px;
  }
  .form-control {
    margin-right: 0;
  }
  .ebs-input__phone,
  .react-tel-input {
    margin-left: 10px;
  }

  .ebs-input__type--email,
  .email {
    margin-left: 20px;
    margin-right: 0;
    width: 400px;
  }

  input {
    border: none;
  }
`;
export default Style;
