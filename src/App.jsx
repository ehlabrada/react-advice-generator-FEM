import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Main from "./components/Main";
import GlobalStyle from "./components/theme/globalStyles";
import Theme from "./components/theme/Theme";

import useFetchAdvice from "./hooks/useFetchAdvice";

const App = () => {
  const { data, loading, error, generateAdvice } = useFetchAdvice();

  const handleAdvice = () => generateAdvice();

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Main
          data={data}
          loading={loading}
          error={error}
          handleAdvice={handleAdvice}
        />
      </ThemeProvider>
    </>
  );
};

export default App;
