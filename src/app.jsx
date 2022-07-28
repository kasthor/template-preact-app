import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "./theme";
import { Routes } from "./routes"


export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}
