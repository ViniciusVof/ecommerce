import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { theme } from "@config/theme";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import Routes from "@routes/index";

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
      <Routes />
    </ThemeProvider>
  );
}

export default App;
