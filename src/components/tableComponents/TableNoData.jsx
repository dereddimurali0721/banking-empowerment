import { Card, CardMedia, Box, Typography } from "@mui/material";
import noData from "../../assets/noDataFound.png";

export default function TableNoData() {
  return (
    <>
      <Card variant="outlined">
        <CardMedia
          alt="No data"
          component={"img"}
          image={noData}
          height={300}
        />
      </Card>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
        }}
      >
        <Typography variant="h5">Please try again</Typography>
      </Box>
    </>
  );
}
