import { Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <Container sx={{ p: 2 }}>
      <Grid
        container
        flexDirection={"column"}
        gap={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item>
          <Typography variant="h4">
            The Page you are trying is unavailable{" "}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/");
            }}
          >
            Go back to Home
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
