import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Home from "./components/Home/Home";
import { bingoTheme } from "./components/CustomThemes";

function App() {
  return (
    <div style={{ width: "100dvw", height: "100dvh" }}>
      <ThemeProvider theme={bingoTheme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
