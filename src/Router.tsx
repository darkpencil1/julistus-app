import React from 'react';
//@ts-ignore
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Shop from './components/Pages/Shop';
import About from './components/Pages/About';
import Mission from './components/Pages/Mission';
import ProductPage from './components/Pages/ProductPage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/kauppa" element={<Shop/>} />
        <Route path="/tuote" element={<ProductPage/>} />
        <Route path="/meistä" element={<About/>} />
        <Route path="/missio" element={<Mission/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

