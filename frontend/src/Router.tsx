import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Shop from "./components/Pages/Shop";
import About from "./components/Pages/About";
import Catalog from "./components/Pages/Catalog";
import ProductPage from "./components/Pages/ProductPage";
import Cart from "./components/Pages/Cart";
import Miscellaneous from "./components/Pages/Miscellaneous";

const Router: React.FC = () => {
  const pathName = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/julistus-app" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/tuote" element={<ProductPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/ostoskori" element={<Cart />} />
      <Route path="/misc" element={<Miscellaneous />} />
    </Routes>
  );
};

export default Router;
