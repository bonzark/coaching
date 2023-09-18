import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Routers from "./routes";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
      
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routers />;
    </ThemeProvider>
  );
}

export default App;
