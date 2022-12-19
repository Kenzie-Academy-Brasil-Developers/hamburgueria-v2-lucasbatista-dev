import styled from "styled-components";
import { colors } from "../../styles/colors";

export const TotalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 140px;
  padding: 18px;
  gap: 20px;
  border-radius: 0 0 6px 6px;
  background-color: ${colors.gray0};
  border-top: 2px solid ${colors.gray100};
`;

export const Value = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: ${colors.gray300};
  }
  span {
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 24px;
    color: ${colors.colorPrimary};
  }
`;
