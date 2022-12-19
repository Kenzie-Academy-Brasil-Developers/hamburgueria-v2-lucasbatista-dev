import styled from "styled-components";

export const UlList = styled.ul`
  display: flex;

  flex-wrap: wrap;
  row-gap: 12px;
  column-gap: 20px;
  width: 100%;
  @media (max-width: 700px) {
    width: 100%;
  }
  @media (max-width: 1399px) {
    justify-content: center;
  }
`;
