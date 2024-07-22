import { Box, Toolbar, Stack, Link, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material";

export default function FixedFooter() {
  const theme = useTheme();
  return (
    <Box
      component={"footer"}
      sx={{
        background: theme.palette.primary.main,
        color: "white",
        padding: "12px",
        mt: "auto",
      }}
    >
      <Toolbar>
        <Grid container gap={2} flexDirection={"column"} sx={{ px: 7, pb: 2 }}>
          <Grid item>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Link href="/" sx={{ color: "white" }}>
                Personal Banking
              </Link>
              <Link href="/" sx={{ color: "white" }}>
                Security
              </Link>
              <Link href="/" sx={{ color: "white" }}>
                Legal
              </Link>
              <Link href="/" sx={{ color: "white" }}>
                Privacy
              </Link>
              <Link href="/" sx={{ color: "white" }}>
                Rates and charges
              </Link>
            </Stack>
          </Grid>
          <Grid item>
            <Typography variant="body2" gutterBottom>
              Lloyds Bank plc. Registered Office: 25 Gresham Street, London EC2V
              7HN. Registered in England and Wales no. 2065 Lloyds Bank plc is
              authorised by the Prudential Regulation Authority and regulated by
              the Financial Conduct Authority and the Prudential Regulation
              Authority under registration number 119278.
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </Box>
  );
}
