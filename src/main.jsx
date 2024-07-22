import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import UserContextProvider from "./context/UserContext/UserContextProvider.jsx";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
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
  </React.StrictMode>
);
