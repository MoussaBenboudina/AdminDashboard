import { Box } from "@mui/material";
// import { ResponsiveLine } from "@nivo/line";
import Line from "./Line";
import Header from "../../components/Header";

const LineChart = () => {
  //   const theme = useTheme();
  return (
    <Box>
      <Header title="Line Chart" subTitle="Simple Line Chart" />

      <Line />
    </Box>
  );
};
2;

export default LineChart;
