import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AsideContainer } from "./styles";
import Logo from "../../assets/logoKenzie.svg";
import Dots from "../../assets/dots.png";

export const AsideInfo = () => {
  return (
    <AsideContainer>
      <img src={Logo} alt="" />
      <div className="containerMessage">
        <div className="containerImg">
          <HiOutlineShoppingBag />
        </div>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <span>melhores </span>
          ingredientes.
        </p>
      </div>
      <div className="containerDots">
        <img src={Dots} alt="" />
      </div>
    </AsideContainer>
  );
};
