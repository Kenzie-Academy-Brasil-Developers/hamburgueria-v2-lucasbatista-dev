import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { DashboardContext } from "../../contexts/DashboardContext";
import { UserContext } from "../../contexts/UserContext";
import { LiCard, ImageDiv, Info } from "./styles";

interface iProducts {
  title: string;
  type: string;
  price: number;
  image: string;
  id: string;
}

export const Products = ({ title, type, price, image, id }: iProducts) => {
  const { products } = useContext(UserContext);
  const { setCurrentSale, currentSale } = useContext(DashboardContext);

  const handleClickTest = (id: string) => {
    const productSale: any = products.find((item) => {
      return item.id == id;
    });
    if (!currentSale.includes(productSale)) {
      setCurrentSale([...currentSale, productSale]);
    } else {
      toast.error("Esse item já esta no carrinho");
    }
    // setEmptyCard(false);
  };

  return (
    <LiCard>
      <ImageDiv>
        <img src={image} alt="" />
      </ImageDiv>
      <Info>
        <h3>{title}</h3>
        <p>{type}</p>
        <span>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button
          id={id}
          className="button green md"
          onClick={(e) => {
            handleClickTest(e.currentTarget.id);
          }}
        >
          Adicionar
        </button>
      </Info>
    </LiCard>
  );
};
