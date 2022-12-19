import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Products } from "../Products";
import { UlList } from "./styles";
import { CircularProgress } from "@chakra-ui/react";

export const ProductsList = () => {
  const { filtredProducts } = useContext(UserContext);

  return (
    <>
      <UlList>
        {filtredProducts.length ? (
          filtredProducts.map((product) => (
            <Products
              key={product.id}
              title={product.name}
              type={product.category}
              price={product.price}
              image={product.img}
              id={product.id}
            />
          ))
        ) : (
          <CircularProgress isIndeterminate color="green.300" />
        )}
      </UlList>
    </>
  );
};
