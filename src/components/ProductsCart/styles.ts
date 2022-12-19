import styled from "styled-components";
export const LiContainer = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  button {
    cursor: pointer;
    background-color: transparent;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #bdbdbd;
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border: 5px solid var(--gray-20);
  background-color: var(--gray-20);
  border-radius: 5px;
  object-fit: cover;
`;

export const Info = styled.div`
  width: 115px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    color: #333333;
  }
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;

    line-height: 16px;
    color: #828282;
  }
`;
