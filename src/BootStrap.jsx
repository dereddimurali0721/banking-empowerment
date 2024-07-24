import { QueryClient, QueryClientProvider } from "react-query";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import UserContextProvider from "./context/UserContext/UserContextProvider.jsx";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";
// import { useEffect } from "react";
export default function BootStrap() {
  const queryClient = new QueryClient();
  const theme = createTheme({
    palette: {
      // mode: "dark",
      primary: {
        main: "#006A4D",
      },
      secondary: {
        main: "#e87a00",
      },
    },
  });

  // useEffect(() => {
  //   throw new Error("error");
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <Router>
            <CssBaseline />
            <App />
          </Router>
        </UserContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
