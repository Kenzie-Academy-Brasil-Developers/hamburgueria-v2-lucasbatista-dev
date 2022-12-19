import React, { useContext, useState } from "react";
import { Header, Navbar } from "./styles";
import logo from "../../assets/logoKenzie.svg";
import { HiShoppingCart, HiOutlineLogout } from "react-icons/hi";
import { DashboardContext } from "../../contexts/DashboardContext";
import { UserContext } from "../../contexts/UserContext";

export const Nav = () => {
  const { logout, currentSale, setCartIsOpen, cartIsOpen, openModal } =
    useContext(DashboardContext);
  const { products, filtredProducts, setFiltredProducts } =
    useContext(UserContext);

  const showProducts = (value: any) => {
    const newProducts: any = products.filter((item) => {
      if (
        item.name.toLowerCase().includes(value) ||
        item.category.toLowerCase().includes(value)
      ) {
        return item;
      }
    });
    setFiltredProducts(newProducts);
  };

  return (
    <>
      <Header>
        <Navbar>
          <img src={logo} alt="Logo" />
          <div className="asideHeader">
            <form>
              <input
                onKeyUp={(e) => {
                  showProducts(
                    (e.target as HTMLInputElement).value.toLowerCase()
                  );
                }}
                type="text"
                placeholder="Digitar pesquisa"
              />
              <button className="button green md">Pesquisar</button>
            </form>
            <div className="iconsSection">
              <button
                onClick={() => {
                  openModal(setCartIsOpen);
                }}
                className="cart"
              >
                <HiShoppingCart />
                <div className="cartCounter">
                  <small>{currentSale.length}</small>
                </div>
              </button>
              <button onClick={logout} className="logout">
                <HiOutlineLogout />
              </button>
            </div>
          </div>
        </Navbar>
      </Header>
    </>
  );
};
