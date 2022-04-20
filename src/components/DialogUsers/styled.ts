import styled from "@emotion/styled";

export const Style = styled.div`
  .center {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }

  .dialog {
    background-color: white;
    width: 250px;
    height: 250px;
    border: 2px solid black;
    border-radius: 15px;
    z-index: 2;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  h1 {
    text-align: center;
  }

  .button-yes {
    margin-left: 20px;
    width: 80px;
    background-color: green;
    display: inline;
    text-transform: capitalize;
  }

  .button-no {
    margin-right: 20px;
    width: 80px;
    background-color: red;
    display: inline;
    float: right;
    text-transform: capitalize;
  }
`;
export default Style;
