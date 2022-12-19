import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  width: 100%;
  min-height: 80px;
  margin-bottom: 16px;
  background-color: ${colors.gray0};

  .asideHeader {
    display: flex;
    align-items: center;
    gap: 23px;
    @media (max-width: 480px) {
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  height: 100%;
  width: 90%;
  max-width: 1400px;
  @media (max-width: 700px) {
    justify-content: center;
  }
  form {
    width: 100%;
    max-width: 370px;
    justify-content: space-around;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0px 10px 0px 20px;
    background-color: white;
    border: 2px solid ${colors.gray100};
    border-radius: 8px;
    height: 60px;
    width: 100%;
  }
  form:focus-within {
    border: 2px solid ${colors.gray600};
  }
  form input {
    font-size: 16px;
    color: ${colors.gray300};
    padding-right: 10px;
    max-width: 210px;
  }
  .iconsSection {
    display: flex;
    gap: 18px;

    .cart {
      color: #bdbdbd;
      font-size: 30px;
      cursor: pointer;
      display: flex;

      .cartCounter {
        width: 18px;
        height: 22px;
        background-color: ${colors.colorPrimary};
        border-radius: 7px;

        position: relative;
        right: 15px;
        bottom: 10px;

        small {
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 14px;
          color: white;
        }
      }
    }
    .cart:hover {
      color: ${colors.colorPrimary50};
    }

    .logout {
      color: #bdbdbd;
      font-size: 30px;
      cursor: pointer;
      display: flex;
    }
    .logout:hover {
      color: ${colors.colorPrimary50};
    }
  }
`;
