import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import PropTypes from "prop-types";

function PieChartCard({ heading, pieChatData, onItemClickHandler }) {
  return (
    <Card sx={{ width: "fit-content" }} elevation={3}>
      <CardHeader title={heading} />
      <Divider />
      <CardContent>
        <PieChart
          series={[
            {
              data: pieChatData,
              outerRadius: 65,
              cx: 90,
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            },
          ]}
          width={400}
          height={200}
          onItemClick={(event, d) => {
            sessionStorage.setItem("headingLabel", heading);
            sessionStorage.setItem(
              "subTopicLabel",
              pieChatData[d.dataIndex].label
            );
            onItemClickHandler(pieChatData[d.dataIndex], heading);
          }}
        />
      </CardContent>
    </Card>
  );
}

PieChartCard.propTypes = {
  heading: PropTypes.string,
  pieChatData: PropTypes.array,
  onItemClickHandler: PropTypes.func,
};

PieChartCard.defaultProps = {
  heading: "PieChartCard",
  pieChatData: [
    { id: 0, value: 10, label: "series A" },
    { id: 1, value: 15, label: "series B" },
    { id: 2, value: 20, label: "series C" },
  ],
};

export default PieChartCard;
