import React, { useContext } from "react";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";
import { ContainterLogin, FormContainer } from "./styles";

import { InputPassword } from "../../components/InputPassword";
import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { AsideInfo } from "../../components/AsideInfo";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import Logo from "../../assets/logoKenzie.svg";

export const Login = () => {
  const { submitLogin, loading } = useContext(UserContext);

  interface iLoginFormData {
    email: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iLoginFormData>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  return (
    <ContainterLogin>
      <FormContainer>
        {/* <img className="mobileLogo" src={Logo} alt="" /> */}
        <form noValidate onSubmit={handleSubmit(submitLogin)}>
          <h2>Login</h2>
          <InputForm
            register={register("email")}
            type="text"
            label={"E-mail"}
            id={"email"}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <InputPassword
            id="password"
            register={register("password")}
            label={"Senha"}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <Button class1="button green xl">
            {loading ? "Fazendo o Login" : "Logar"}
          </Button>
        </form>
        <span className="createAccount">
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </span>
        <Link className="button gray xl" to="/cadastro">
          Cadastrar
        </Link>
      </FormContainer>
      <AsideInfo />
    </ContainterLogin>
  );
};
