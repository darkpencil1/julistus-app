import React from "react";
import { Footer } from "./components/sharedComponents/Footer";
import Header from "./components/sharedComponents/Header";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./state/contexts/productContext";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./resources/styles/GlobalStyle";
import theme from "./resources/styles/theme";
import WIP from "./components/FrontPageComponents/WIP";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ProductProvider>
          <div className="App">
            <GlobalStyle />
            <WIP />
            <Header />
            <Router />
            <Footer />
          </div>
        </ProductProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
