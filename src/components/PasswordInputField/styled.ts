import styled from "@emotion/styled";

export const Style = styled.div`
  .error {
    color: red;
    width: 80%;
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
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
`;
export default Style;
