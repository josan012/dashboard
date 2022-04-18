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
    border-right: 1px solid #000000;
    padding-right: 10px;
  }

  Button {
    width: 100px;
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

  .posts,
  .users,
  .dashboard {
    text-align: center;
    height: 30px;
  }

  .logout {
    margin-left: 10px;
  }

  .email {
    width: 140px;
  }

  .signup {
    margin-left: 10px;
  }
`;
export default Style;
