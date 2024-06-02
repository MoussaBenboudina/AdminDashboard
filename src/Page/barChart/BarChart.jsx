// import { ResponsiveBar } from "@nivo/bar";
import { Box } from "@mui/material";
import Bar from "./Bar";

import Header from "../../components/Header";

const BarChart = () => {
  // const theme = useTheme();
  return (
    <Box>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <Bar />
      hello
    </Box>
  );
};

export default BarChart;
