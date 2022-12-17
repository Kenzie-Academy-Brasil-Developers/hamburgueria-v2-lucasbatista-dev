import styled from "styled-components";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

export const ContainterLogin = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  width: 90%;
  height: 100vh;
  display: flex;
  gap: 55px;
  align-items: center;
  justify-content: center;
`;
export const FormContainer = styled.div`
  width: 90%;
  max-width: 500px;

  padding: 26px 24px;

  border: 2px solid ${colors.gray0};
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  form {
    display: flex;
    flex-direction: column;

    gap: 10px;
    margin-bottom: 20px;
    h2 {
      font-size: ${typography.heading4.size};
      font-weight: ${typography.heading4.weigth};
      line-height: ${typography.heading4.heigth};
    }
  }
  span {
    width: 327px;
    height: 36px;

    font-size: ${typography.body.size};
    font-weight: ${typography.body.weigth};
    line-height: ${typography.body.heigth};
  }
`;

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
