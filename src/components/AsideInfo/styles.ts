import styled from "styled-components";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

export const AsideContainer = styled.div`
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  img {
    width: 243px;
    height: 56px;
  }
  @media (max-width: 900px) {
    display: none;
  }
  .containerMessage {
    width: 377px;
    height: 95px;

    display: flex;
    align-items: center;

    gap: 20px;
    padding: 17px 14px;

    border: 1px solid #e0e0e0;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    p {
      width: 261px;

      font-size: ${typography.headline.size};
      font-weight: ${typography.headline.weigth};
      line-height: ${typography.headline.heigth};
      color: ${colors.gray300};
      span {
        font-weight: ${typography.body600.weigth};
        color: ${colors.gray600};
      }
    }
  }

  .containerImg {
    width: 60px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(39, 174, 96, 0.1);
    border-radius: 5px;
    color: ${colors.colorPrimary};
  }
  .containerDots {
    width: 181px;
    height: 79px;
  }
`;
