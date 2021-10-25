import React from "react";
import ReactDOM from "react-dom";

import { GlobalStyle } from "./globals/GlobalStyles";
import App from "./App";
import DataProvider from "./components/context/context";
import { ThemeProvider } from "styled-components";
import { Theme } from "./components/UI/themes";
const Root = () => (
  <React.Fragment>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <DataProvider>
        <App />
      </DataProvider>
    </ThemeProvider>
  </React.Fragment>
);

ReactDOM.render(<Root />, document.querySelector("#root"));
