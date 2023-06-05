import React from "react";
import { Footer } from "./components/sharedComponents/Footer";
import Header from "./components/sharedComponents/Header";
import Router from "./Router";
import { ProductProvider } from "./state/contexts/productContext";
import "./resources/styles/css/main.css";
import { ThemeProvider } from "styled-components";
import theme from "./resources/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProductProvider>
        <div className="App">
          <Header />
          <Router />
          <Footer />
        </div>
      </ProductProvider>
    </ThemeProvider>
  );
};

export default App;
