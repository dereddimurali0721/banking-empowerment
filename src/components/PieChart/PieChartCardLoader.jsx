import {
  Divider,
  Card,
  CardContent,
  CardHeader,
  Skeleton,
  Grid,
  Box,
} from "@mui/material";

export default function PieChartCardLoader() {
  return (
    <Card sx={{ width: "fit-content" }} elevation={3}>
      <CardHeader
        title={
          <Skeleton
            width={200}
            height={20}
            variant="rounded"
            animation="wave"
          />
        }
      />
      <Divider />
      <CardContent>
        <Grid
          container
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={4}
          pl={3}
        >
          <Grid item>
            <Skeleton
              width={150}
              height={150}
              variant="circular"
              animation="wave"
            />
          </Grid>
          <Grid item>
            <Grid container flexDirection={"column"} gap={1}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Skeleton
                  width={27}
                  height={27}
                  variant="rounded"
                  animation="wave"
                />
                <Skeleton
                  width={100}
                  height={20}
                  variant="rounded"
                  animation="wave"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Skeleton
                  width={27}
                  height={27}
                  variant="rounded"
                  animation="wave"
                />
                <Skeleton
                  width={100}
                  height={20}
                  variant="rounded"
                  animation="wave"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Skeleton
                  width={27}
                  height={27}
                  variant="rounded"
                  animation="wave"
                />
                <Skeleton
                  width={100}
                  height={20}
                  variant="rounded"
                  animation="wave"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
