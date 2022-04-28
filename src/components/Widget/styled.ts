import styled from "@emotion/styled";

export const Style = styled.div`
  .widget {
    width: 200px;
    height: auto;
    border-radius: 18px;
    border: 2px solid #000000;
    padding-bottom: 20px;
    word-wrap: break-word;
  }

  h1 {
    text-align: center;
    font-size: 12px;
  }

  p {
    text-align: center;
  }

  .util {
    float: right;
    margin-right: 8px;
  }

  .date {
    margin-left: 8px;
  }

  .edit {
    margin-left: 8px;
    display: flex;
    justify-content: baseline;
    width: auto;
    margin-right: 57px;
  }

  .delete {
    float: right;
    margin-right: 8px;
    display: flex;
    justify-content: baseline;
    width: auto;
  }

  .actions {
    display: flex;
    justify-content: baseline;
  }

  .delete:hover,
  .edit:hover {
    cursor: pointer;
  }

  .image,
  img {
    width: 180px;
    height: 100px;
    margin: 0 auto;
  }
`;
export default Style;
