import styled from "@emotion/styled";

export const Style = styled.div`
  .center {
    display: flex;
    justify-content: center;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 900px;
    height: 200px;
    gap: 20px;
  }
`;
export default Style;
