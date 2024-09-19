import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Home } from "@pages/Home";
import reset from "styled-reset";
import { theme } from "@config/theme";

import "swiper/css";
import "swiper/css/pagination";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .swiper-pagination {
    bottom: 0;
  }
  .swiper-pagination-bullet-active {
    background-color: ${(props) => props.theme.line};
    width: 8px;
    height: 8px;
    border-radius: 8px;
  }

  .swiper-pagination-bullet-active {
    background-color: ${(props) => props.theme.primary};
    width: 24px;
    height: 8px;
    border-radius: 8px;
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
