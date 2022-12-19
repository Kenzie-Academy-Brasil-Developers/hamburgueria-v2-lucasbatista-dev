import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface iDashboardContextProps {
  children: React.ReactNode;
}
interface iCurrentSale {
  id: number;
  name: string;
  category: string;
  img: string;
  price: number;
}

interface iDashboardContext {
  logout: () => void;
  currentSale: iCurrentSale[];
  setCurrentSale: any;
  cartIsOpen: boolean;
  setCartIsOpen: any;
  setEmptyCard: any;
  openModal: (state: any) => void;
  closeModal: (state: any) => void;
  emptyCard: boolean;
}

export const DashboardContext = createContext({} as iDashboardContext);

export const DashboardProvider = ({ children }: iDashboardContextProps) => {
  const [currentSale, setCurrentSale] = useState([] as iCurrentSale[]);
  const [emptyCard, setEmptyCard] = useState(true);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  function openModal(state: any) {
    state(true);
  }

  function closeModal(state: any) {
    state(false);
  }

  return (
    <DashboardContext.Provider
      value={{
        logout,
        currentSale,
        setCurrentSale,
        cartIsOpen,
        setCartIsOpen,
        openModal,
        closeModal,
        setEmptyCard,
        emptyCard,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
