import styled from "styled-components";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

export const ModalContainer = styled.div`
  width: 100%;
  .emptyCard {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    text-align: center;

    color: #333333;
  }
  .emptyCardBtn {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #828282;
  }
  header {
    width: 100%;
    height: 50px;
    border-radius: 6px 6px 0 0;

    display: flex;
    justify-content: space-between;
    p {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;

      color: #ffffff;
    }
    button {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;

      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const ModalHeader = styled.header`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 22px;

  background-color: ${colors.colorPrimary};

  p {
  }
  button {
  }
`;
export const Products = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-height: 350px;
  gap: 20px;
  overflow-y: auto;
  background-color: ${colors.gray0};
  padding: 20px 10px;
`;
