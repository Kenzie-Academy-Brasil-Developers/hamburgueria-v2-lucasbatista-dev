import React, { useContext, useEffect } from "react";
import { Nav } from "../../components/Header";
import { ModalCart } from "../../components/ModalCart";
import { ProductsList } from "../../components/ProductsList";
import { UserContext } from "../../contexts/UserContext";

export const Dashboard = () => {
  const { autoLogin } = useContext(UserContext);

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <>
      <Nav></Nav>

      <main>
        <ProductsList />
        <ModalCart />
      </main>
    </>
  );
};
