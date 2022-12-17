import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface iDashboardContextProps {
  children: React.ReactNode;
}

interface iDashboardContext {
  logout: () => void;
}

export const DashboardContext = createContext({} as iDashboardContext);

export const DashboardProvider = ({ children }: iDashboardContextProps) => {
  const [product, setProduct] = useState([]);
  const [filtredProducts, setFiltredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [emptyCard, setEmptyCard] = useState(true);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  console.log(logout);

  return (
    <DashboardContext.Provider value={{ logout }}>
      {children}
    </DashboardContext.Provider>
  );
};
