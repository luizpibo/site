import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

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
  const siteTitle = "Site/Blog pessoal";
  return (
  <>
  <Head>
    <title>Luiz Fernando</title>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@luizpibo.0" />
    <meta name="twitter:title" content="Luiz Fernando - Desenvolvedor Full Stack" /> 
    <meta name="twitter:description" content="Site/Blog pessoal" />
    <meta name="twitter:image" content="https://luizpibo.com/fotosemfundo3.png" />
    <meta
      property="og:image"
      content={`https://og-image.vercel.app/${encodeURI(
        siteTitle
      )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
    />
    <meta
      property="og:image"
      content={`https://og-image.vercel.app/${encodeURI(
        siteTitle
      )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
    />
    
    <meta ref="keywords" content="desenvolvedor, full stack, javascript, nodejs, react, reactjs, node, nextjs, graphql, typescript, luiz, fernando, luizfernando, luizfernando.dev" />
    <meta ref="author" content="Luiz Fernando" />
    <meta ref="robots" content="index, follow" />
    <meta ref="googlebot" content="index, follow" />
    <meta ref="google" content="nositelinkssearchbox" />
    <link rel="icon" href="BMOGif.gif" type="imagem/gif" />
  </Head>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
  )
}

export default MyApp;
