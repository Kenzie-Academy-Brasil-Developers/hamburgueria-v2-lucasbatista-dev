import React, { useContext } from "react";
import { Header, Navbar } from "./styles";
import logo from "../../assets/logoKenzie.svg";
import { HiShoppingCart, HiOutlineLogout } from "react-icons/hi";
import { DashboardContext } from "../../contexts/DashboardContext";

export const Nav = () => {
  const { logout } = useContext(DashboardContext);

  return (
    <>
      <Header>
        <Navbar>
          <img src={logo} alt="Logo" />
          <div className="asideHeader">
            <form
            // onSubmit={(e) => {
            //   e.preventDefault();
            //   showProducts(e.target.search.value.toLowerCase());
            // }}
            >
              <input
                //   onKeyUp={(e) => {
                //     showProducts(e.target.value.toLowerCase());
                //   }}
                type="text"
                placeholder="Digitar pesquisa"
              />
              <button className="button green md">Pesquisar</button>
            </form>
            <div className="iconsSection">
              <button className="cart">
                <HiShoppingCart />
                <div className="cartCounter">
                  <small>0</small>
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
