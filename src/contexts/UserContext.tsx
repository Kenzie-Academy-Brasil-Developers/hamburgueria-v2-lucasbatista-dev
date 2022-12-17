import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";

interface iUserContextProps {
  children: React.ReactNode;
}

interface iUserContext {
  submitLogin: (data: { email?: string; password?: string }) => void;
  loading: boolean;
  submitRegister: (data: {
    name?: string;
    email?: string;
    password?: string;
  }) => void;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ----------------------LOGIN----------------------

  const userLogin = async (formData: {}) => {
    try {
      setLoading(true);
      const response = await api.post("login", formData);

      const { accessToken } = response.data;

      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", accessToken);
      toast.success("Logado com sucesso");

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      const currentError = error as AxiosError<string>;

      if (currentError.response?.data === "Incorrect password") {
        toast.error("Senha inválida");
      } else if (currentError.response?.data == "Cannot find user") {
        toast.error("Usuário não encontrado");
      }
    } finally {
      setLoading(false);
    }
  };
  const submitLogin = (data: {}) => {
    userLogin(data);
  };

  // ----------------------REGISTER----------------------

  const userRegister = async (formData: {}) => {
    try {
      setLoading(true);
      const response = await api.post("users", formData);

      toast.success("Usuário cadastrado com sucesso");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const submitRegister = async (data: {}) => {
    await userRegister(data);
  };

  // ----------------------AUTOLOGIN----------------------

  const autoLogin = async () => {
    const token = window.localStorage.getItem("@TOKEN");

    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const response = await api.get("products");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <UserContext.Provider value={{ submitLogin, loading, submitRegister }}>
      {children}
    </UserContext.Provider>
  );
};
