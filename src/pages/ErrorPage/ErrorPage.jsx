import { Grid, Typography } from "@mui/material";

export default function ErrorPage() {
  return (
    <Grid
      container
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography>Something went wrong.Please try after some tine</Typography>
    </Grid>
  );
}
