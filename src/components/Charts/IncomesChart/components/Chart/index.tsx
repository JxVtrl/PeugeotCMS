import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ChartProps } from "@/interfaces/Chart.interface";

ChartJS.defaults.plugins.legend.display = false;

const Chart: React.FC<ChartProps> = ({ chartData }) => {
  return (
    <Line
      data={chartData}
      options={{
        responsive: true,
        aspectRatio: 3,
      }}
    />
  );
};

export default Chart;
