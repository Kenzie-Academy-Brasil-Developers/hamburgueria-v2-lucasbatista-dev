import React, { useContext } from "react";

import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export const ProtectedRoutes = () => {
  const token = localStorage.getItem("@TOKEN");

  if (!token) {
    return <Navigate replace to={"/"} />;
  }

  return <Outlet />;
};
