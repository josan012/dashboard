import styled from "@emotion/styled";

export const Style = styled.div`
  .center {
    display: flex;
    justify-content: center;
  }
  th,
  td {
    border: 2px solid #000;
    text-align: center;
  }

  .icon {
    width: 50px;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
export default Style;