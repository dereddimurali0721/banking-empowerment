import {
  AppBar,
  Avatar,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import SingInPage from "./pages/SingInPage/SingInPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import MaintenancePage from "./pages/MaintenancePage/MaintenancePage";
import FixedFooter from "./components/FixedFooter/FixedFooter";
import HomePage from "./pages/HomePage/HomePage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import InvestPage from "./pages/InvestPage/InvestPage";
import BankWidePage from "./pages/BankWidePage/BankWidePage";
import useUserContext from "./context/UserContext/useUserContext";

function App() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { userData } = useUserContext();

  return (
    <>
      <AppBar
        sx={{
          background: theme.palette.primary.main,
          padding: "0 27px 0 22px !important",
          height: "75px",
        }}
      >
        <Toolbar sx={{ pt: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              color: "white",
            }}
          >
            <Typography>LLOYDS BANK</Typography>
            {userData.isLoggedIn && (
              <Stack direction={"row"} spacing={2} alignContent={"center"}>
                <Button
                  variant="outlined"
                  sx={{ color: theme.palette.common.white }}
                  onClick={() => {
                    navigate("/home");
                  }}
                >
                  Home
                </Button>
                <Button
                  variant="outlined"
                  sx={{ color: theme.palette.common.white }}
                  onClick={() => {
                    navigate("/invest");
                  }}
                >
                  Invest
                </Button>
                <Button
                  variant="outlined"
                  sx={{ color: theme.palette.common.white }}
                  onClick={() => {
                    navigate("/others");
                  }}
                >
                  Trends
                </Button>
                <Avatar sx={{}}></Avatar>
              </Stack>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box component={"section"} sx={{ minHeight: "100%", pb: 3 }}>
        <Routes>
          <Route path="/" exact element={<SingInPage />} />
          {/* userData.isLoggedIn ? <HomePage /> : */}
          <Route
            path="/home"
            exact
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/invest"
            exact
            element={
              <ProtectedRoute>
                <InvestPage />
              </ProtectedRoute>
            }
          />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/500" element={<ErrorPage />} />
          <Route path="/maintenance" element={<MaintenancePage />} />
          <Route
            path="/others"
            element={
              <ProtectedRoute>
                <BankWidePage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* <Grid item sx={{ position: "sticky", bottom: "0" }}>
          
        </Grid> */}
      </Box>
      <FixedFooter />
    </>
  );
}

export default App;
