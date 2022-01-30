import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#F0DB4F",
    secondary: "#69A164",
    background: "#F5F5F5",
    text: "#333",
    textLight: "#fff",
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
  )
}

export default MyApp;
