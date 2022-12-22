import React from "react";

import { Navigate, Outlet } from "react-router-dom";

export const ProtectedLogin = () => {
  const token = localStorage.getItem("@TOKEN");

  if (token) return <Navigate replace to={"/dashboard"} />;

  return <Outlet />;
};
