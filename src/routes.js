import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Contato from './pages/contato'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="contato" element={<Contato />}/>
    </Routes>
  );
};
