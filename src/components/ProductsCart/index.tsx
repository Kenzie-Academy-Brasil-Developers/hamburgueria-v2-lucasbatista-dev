import { useContext } from "react";
import { DashboardContext } from "../../contexts/DashboardContext";
import { LiContainer, Image, Info } from "./styles";

interface iProductsCart {
  image: string;
  title: string;
  type: string;
  id: string;
}

export const ProductsCart = ({
  image,
  title,
  type,
  //   handleRem,
  id,
}: iProductsCart) => {
  const { currentSale, setCurrentSale, setEmptyCard } =
    useContext(DashboardContext);

  const handleRemove = (id: string | number) => {
    const removed = currentSale.filter((item) => {
      return item.id != id;
    });

    setCurrentSale(removed);
    if (currentSale.length <= 1) {
      setEmptyCard(true);
    }
  };
  return (
    <LiContainer>
      <Image src={image} alt="" />
      <Info>
        <p>{title}</p>
        <span>{type}</span>
      </Info>
      <button onClick={() => handleRemove(id)}>Remover</button>
    </LiContainer>
  );
};
