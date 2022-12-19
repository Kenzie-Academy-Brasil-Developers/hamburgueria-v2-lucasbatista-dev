import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AsideInfo } from "../../components/AsideInfo";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";
import { InputPassword } from "../../components/InputPassword";
import { ContainerRegister, FormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { registerSchema } from "./registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/UserContext";
import Logo from "../../assets/logoKenzie.svg";

export const Register = () => {
  const { submitRegister } = useContext(UserContext);

  interface iRegisterFormData {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterFormData>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  return (
    <ContainerRegister>
      <AsideInfo />
      <FormContainer>
        {/* <img className="mobileLogo" src={Logo} alt="" /> */}
        <form noValidate onSubmit={handleSubmit(submitRegister)}>
          <div>
            <h2>Cadastro</h2>
            <Link to="/">Retornar para o login</Link>
          </div>
          <InputForm
            type="text"
            label="Nome"
            id="name"
            register={register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <InputForm
            type="text"
            label="E-mail"
            id="email"
            register={register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <InputPassword
            id="password"
            label="Senha"
            register={register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <InputPassword
            id="confirmPassword"
            label="Confirmar Senha"
            register={register("passwordConfirmation")}
          />
          {errors.passwordConfirmation && (
            <p>{errors.passwordConfirmation.message}</p>
          )}
          <Button class1="button gray xl">Cadastrar</Button>
        </form>
      </FormContainer>
    </ContainerRegister>
  );
};
