import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import SignInForm from "../../components/forms/SignInForm/SignInForm";
// import building from "../../assets/building.jpg";

export default function SingInPage() {
  return (
    <Grid
      container
      sx={{ mt: 8 }}
      justifyContent={"center"}
      alignSelf={"center"}
    >
      {/* <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${building})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "contain",
          backgroundPosition: "center",
        }}
      /> */}
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            mt: 6,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <SignInForm />
        </Box>
      </Grid>
    </Grid>
  );
}
