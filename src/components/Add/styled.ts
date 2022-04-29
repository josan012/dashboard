import styled from "@emotion/styled";

export const Style = styled.div`
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ebs-button__wrapper,
  .ebs-button--medium.submit {
    width: 100px;
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
  .has-error,
  .react-tel-input,
  .ebs-form__field__explain,
  .ebs-form__field__extra,
  .ebs-radio__wrapper,
  .has-text {
    width: 300px;
  }

  .col,
  .ebs-form__field__control,
  .col-8 {
    padding-left: 0;
  }
  .ebs-button__wrapper,
  .ebs-button--medium,
  .ebs-button--fill,
  .submit {
    margin: 0 auto;
  }

  .ebs-button__wrapper,
  .ebs-button--medium,
  .ebs-button--fill,
  .submit {
    width: 100px;
    margin-bottom: 10px;
  }

  .ebs-button__wrapper:hover,
  .ebs-button--medium:hover,
  .ebs-button--fill:hover,
  .submit:hover {
    width: 100px;
    background-color: #0288d1;
    color: #fff;
  }
`;
export default Style;
