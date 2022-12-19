import styled from "styled-components";
import { colors } from "../../styles/colors";

export const LiCard = styled.li`
  min-width: 300px;
  height: 350px;
  background-color: white;
  border: 2px solid ${colors.gray100};
  border-radius: 5px;
  transition: 0.3s;
  :hover {
    border: 2px solid ${colors.gray600};
  }
  @media (max-width: 550px) {
    width: 85%;
  }
`;

export const ImageDiv = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray0};
  border-radius: 2px 2px 0 0;
  object-fit: cover;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 200px;
  padding: 20px;
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: ${colors.gray600};
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: ${colors.gray300};
  }
  span {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: ${colors.colorPrimary};
  }
`;
