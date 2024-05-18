import { valueFormatter } from "@/utils/valueFormatter";
import React from "react";
import Chart from "./components/Chart";
import * as S from "./styles";

const IncomesChart: React.FC = () => {
  const [chartData, setChartData] = React.useState({
    // labels: incomeMock.map((sale) => sale.date),
    // datasets: [
    //   {
    //     label: "Vendas",
    //     data: incomeMock.map((sale) => sale.amount),
    //     backgroundColor: "rgba(0, 0, 0, 0)",
    //     borderColor: "#1b6688",
    //     borderWidth: 2,
    //     pointBackgroundColor: "#1b6688",
    //     pointBorderColor: "#1b6688",
    //     pointHoverBackgroundColor: "#1b6688",
    //     pointHoverBorderColor: "#1b6688",
    //   },
    // ],
  });

  return (
    <S.Container>
      <S.Title>Receita</S.Title>
      {/* <Chart chartData={chartData} /> */}
      <S.InfosContainer>
        <S.InfoItem>
          <S.InfoItemTitle>Vendido</S.InfoItemTitle>
          <S.InfoValue>{valueFormatter(1000)}</S.InfoValue>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoItemTitle>Recebido</S.InfoItemTitle>
          <S.InfoValue>{valueFormatter(1000)}</S.InfoValue>
        </S.InfoItem>
      </S.InfosContainer>
    </S.Container>
  );
};

export default IncomesChart;
