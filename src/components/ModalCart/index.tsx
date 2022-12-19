import React, { useContext } from "react";
import ReactModal from "react-modal";
import { DashboardContext } from "../../contexts/DashboardContext";
import { CartTotal } from "../CartTotal";
import { ProductsCart } from "../ProductsCart";
import { ModalContainer, ModalHeader, Products } from "./styles";
ReactModal.setAppElement("#root");

export const ModalCart = () => {
  const { cartIsOpen, setCartIsOpen, closeModal, currentSale } =
    useContext(DashboardContext);

  return (
    <>
      <ReactModal
        isOpen={cartIsOpen}
        onRequestClose={() => closeModal(setCartIsOpen)}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <ModalContainer>
          <ModalHeader>
            <p>Carrinho de compras</p>

            <button onClick={() => closeModal(setCartIsOpen)}>X</button>
          </ModalHeader>
          <Products>
            {currentSale.length ? (
              currentSale.map((product) => (
                <ProductsCart
                  key={product.id}
                  image={product.img}
                  title={product.name}
                  type={product.category}
                  id={product.id + ""}
                />
              ))
            ) : (
              <>
                <h2 className="emptyCard">Sua sacola está vazia</h2>
                <button
                  className="emptyCardBtn "
                  onClick={() => closeModal(setCartIsOpen)}
                >
                  Adicione itens
                </button>
              </>
            )}
          </Products>
          <CartTotal />
        </ModalContainer>
      </ReactModal>
    </>
  );
};
