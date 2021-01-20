import * as React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./src/styles/global";

const customConf = {
  gutterWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5,
  },
  container: {
    xs: 'full',
    sm: 'full',
    md: 53.5,
    lg: 53.5,
    xl: 53.5,
  }
};

export const wrapRootElement = ({ element }: any) => {
  return (
    <ThemeProvider theme={{ awesomegrid: customConf }}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  );
};
