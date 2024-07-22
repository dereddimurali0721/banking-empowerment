import { Paper, Skeleton } from "@mui/material";

export default function TableLoader() {
  return (
    <Paper
      variant="outlined"
      sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Skeleton
        width={"100%"}
        height={60}
        variant="rectangle"
        animation="wave"
      />
      <Skeleton
        width={"100%"}
        height={30}
        variant="rectangle"
        animation="wave"
      />
      <Skeleton
        width={"100%"}
        height={30}
        variant="rectangle"
        animation="wave"
      />
      <Skeleton
        width={"100%"}
        height={30}
        variant="rectangle"
        animation="wave"
      />
      <Skeleton
        width={"100%"}
        height={30}
        variant="rectangle"
        animation="wave"
      />
      <Skeleton
        width={"100%"}
        height={30}
        variant="rectangle"
        animation="wave"
      />
    </Paper>
  );
}
