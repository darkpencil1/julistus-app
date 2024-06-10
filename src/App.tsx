import React from "react";
import Footer from "./components/sharedComponents/Footer";
import Header from "./components/sharedComponents/Header";
import Router from "./Router";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./resources/styles/GlobalStyle";
import theme from "./resources/styles/theme";
import WIP from "./components/FrontPageComponents/WIP";
import { AppContextProvider } from "./state/contexts/AppContextProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <HashRouter>
          <div className="App">
            <GlobalStyle theme={theme} />
            <WIP />
            <Header />
            <Router />
            <Footer />
          </div>
        </HashRouter>
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default App;
