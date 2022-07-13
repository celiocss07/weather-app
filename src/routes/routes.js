
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./../pages/home";
import React from "react";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
