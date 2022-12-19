import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
*{
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border: 0;
    list-style: none;   
   

}

main {
    margin: 0 auto;
    max-width: 1400px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
  @media (max-width: 700px) {
   main {
    flex-direction: column;
    align-items: center;
   } 
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    gap: 10px;
    border-radius: 8px;
    color: ${colors.gray0};
    transition: 0.2s;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }

  .button.green {
    background-color: ${colors.colorPrimary};
  }
  .button.green:hover{
    background-color: ${colors.colorPrimary50};
  }
  .button.gray {
    background-color: ${colors.gray100};
    color: ${colors.gray300};
  }
  .button.gray:hover {
    background-color: ${colors.gray300};
    color: ${colors.gray100};
  }
  .button.xl {
    height: 3.75rem;
    width: 100%;
  }
  .button.md {
    height: 2.5rem;
  }
  .teste{
    height: 100px;
  }
  .modal-overlay{
    background: rgba(18, 18, 20, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal-content{
    width: 90%;
    max-width: 450px;   
   
    border-radius: 6px;

}

`;
