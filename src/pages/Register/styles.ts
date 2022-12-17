import styled from "styled-components";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

export const ContainerRegister = styled.div`
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
