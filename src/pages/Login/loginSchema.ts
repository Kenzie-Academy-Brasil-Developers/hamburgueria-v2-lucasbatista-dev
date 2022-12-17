import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("É necessário informar um e-mail")
    .email("O formato do email é inválido"),
  password: yup.string().required("Você precisa informar uma senha"),
});
