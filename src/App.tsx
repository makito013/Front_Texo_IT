import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { routes } from "./routes/default";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
