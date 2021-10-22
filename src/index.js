import React from "react";
import ReactDOM from "react-dom";

import { GlobalStyle } from "./globals/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Theme } from "./globals/Theme";
import App from "./App";
import DataProvider from "./components/context/context";

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
