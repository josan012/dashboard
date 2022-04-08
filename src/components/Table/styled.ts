import styled from "@emotion/styled";

export const Style = styled.div`
  th,
  td {
    border: 2px solid #000;
    padding: 8px;
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
