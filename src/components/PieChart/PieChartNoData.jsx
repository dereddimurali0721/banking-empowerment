import { Card, CardMedia } from "@mui/material";
import noData from "../../assets/noDataFound.png";
export default function PieChartNoData() {
  return (
    <Card sx={{ width: "fit-content" }} elevation={3}>
      <CardMedia
        component={"img"}
        image={noData}
        alt="No Data found"
        height={300}
        // width={200}
      />
    </Card>
  );
}
