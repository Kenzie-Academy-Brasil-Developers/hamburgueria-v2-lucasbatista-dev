import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { ProtectedLogin } from "./ProtectedLogin";

export const RoutesDefault = () => {
  return (
    <Routes>
      <Route element={<ProtectedLogin />}>
        <Route path="/" element={<Login />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
