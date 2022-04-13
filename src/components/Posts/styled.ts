import styled from "@emotion/styled";

export const Style = styled.div`
  .center {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 900px;
    height: 200px;
    gap: 20px;
  }

  Button {
    width: 100px;
    text-align: center;
  }
  .confirm {
    display: flex;
    margin-left: 30%;
  }
`;
export default Style;
