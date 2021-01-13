import * as React from "react";
import GlobalStyles from "./src/styles/global";

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      {element}
    </>
  );
};
