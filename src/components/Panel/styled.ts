import styled from "@emotion/styled";

export const Style = styled.div`
  .center {
    display: flex;
    justify-content: center;
  }

  .panel {
    display: grid;
    width: 100vw;
    grid-template-columns: 20% 1fr;
  }

  .right {
    width: 100%;
    height: 100vh;
  }

  .left {
    width: 100%;
    height: 100vh;
  }

  Button {
    width: 100%;
    height: 50px;
    color: #0288d1;
    background-color: #fff;
    text-transform: capitalize;
  }

  Button:hover {
    background-color: #81d4fa;
    color: #fff;
  }

  .corner {
    position: absolute;
    top: 0;
    right: 0;
  }

  span {
    margin-right: 5px;
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
`;
export default Style;