import React, { useContext } from "react";
import { DashboardContext } from "../../contexts/DashboardContext";
import { TotalDiv, Value } from "./styles";

export const CartTotal = () => {
  const { currentSale, setCurrentSale, setEmptyCard } =
    useContext(DashboardContext);

  return (
    <>
      <TotalDiv>
        <Value>
          <p>Total</p>
          <span>
            {currentSale
              .reduce((first, current) => {
                return first + current.price;
              }, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </Value>
        <button
          className="button gray xl"
          onClick={() => {
            setCurrentSale([]);
            setEmptyCard(true);
          }}
        >
          Remover todos
        </button>
      </TotalDiv>
    </>
  );
};
