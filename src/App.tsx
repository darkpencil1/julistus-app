import React from "react";
import { Footer } from "./components/sharedComponents/Footer";
import Header from "./components/sharedComponents/Header";
import Router from "./Router";
import { ProductProvider } from "./state/contexts/productContext";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./resources/styles/GlobalStyle";
import theme from "./resources/styles/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProductProvider>
        <div className="App">
          <GlobalStyle />
          <Header />
          <Router />
          <Footer />
        </div>
      </ProductProvider>
    </ThemeProvider>
  );
};

export default App;
