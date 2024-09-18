import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import reset from "styled-reset";
import { theme } from "./config/theme";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
