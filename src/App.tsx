import React from "react";
import { Footer } from "./components/sharedComponents/Footer";
import Header from "./components/sharedComponents/Header";
import Router from "./Router";
import { ProductProvider } from "./state/contexts/productContext";
import "./resources/styles/css/main.css";

const App: React.FC = () => {
  return (
    <ProductProvider>
      <div className="App">
        <Header />
        <Router />
        <Footer />
      </div>
    </ProductProvider>
  );
};

export default App;
