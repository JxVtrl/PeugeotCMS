import { valueFormatter } from "@/utils/valueFormatter";
import React from "react";
import * as S from "./styles";
import { salesMock } from "@/data/salesMock";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

ChartJS.defaults.plugins.legend.display = false;

const SalesChart: React.FC = () => {
  const [chartData, setChartData] = React.useState({
    labels: salesMock.map((sale) => sale.date),
    datasets: [
      {
        label: "Vendas",
        data: salesMock.map((sale) => sale.amount),
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: "#1b6688",
        borderWidth: 2,
        pointBackgroundColor: "#1b6688",
        pointBorderColor: "#1b6688",
        pointHoverBackgroundColor: "#1b6688",
        pointHoverBorderColor: "#1b6688",
      },
    ],
  });

  return (
    <S.Container>
      <S.Title>Vendas</S.Title>
      <S.InfosContainer>
        <S.ThisMonth>
          <S.MonthTitle>This Month</S.MonthTitle>
          <S.ValueContainer>
            <S.Value color="#1b6688">{valueFormatter(100000)}</S.Value>
          </S.ValueContainer>
        </S.ThisMonth>
        <S.LastMonth>
          <S.MonthTitle>Last Month</S.MonthTitle>
          <S.ValueContainer>
            <S.Value color="#5e5873">{valueFormatter(1000)}</S.Value>
          </S.ValueContainer>
        </S.LastMonth>
      </S.InfosContainer>
      {/* <Line
        data={chartData}
        options={{
          responsive: true,
          aspectRatio: 3,
        }}
      /> */}
    </S.Container>
  );
};

export default SalesChart;
