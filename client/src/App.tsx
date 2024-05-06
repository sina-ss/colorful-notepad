import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { theme } from "./layout/theme";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={routes} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
