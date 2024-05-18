import React from "react";
import { usePageTitle } from "@/hooks/usePageTitle";
import * as S from "../../pages/home/styles";
import { StatusItem, SalesChart, IncomesChart } from "@/components";
import { AiOutlineEye, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { BiArchive, BiComment } from "react-icons/bi";
import { MdRefresh } from "react-icons/md";

const Home: React.FC = () => {
  usePageTitle("Taylor Dashboard - Home");
    const statusList = [
    {
      title: "Views",
      value: 1200,
      color: "#F2C94C",
      icon: <AiOutlineEye />,
    },
    {
      title: "Comments",
      value: 1700,
      color: "#F2994A",
      icon: <BiComment />,
    },
    {
      title: "Orders",
      value: 100000,
      color: "#27AE60",
      icon: <BiArchive />,
    },
    {
      title: "Likes",
      value: 1000,
      color: "#2D9CDB",
      icon: <AiOutlineHeart />,
    },
    {
      title: "Reviews",
      value: 1000,
      color: "#EB5757",
      icon: <AiOutlineStar />,
    },
    {
      title: "Returns",
      value: 1000,
      color: "#9B51E0",
      icon: <MdRefresh />,
    },
  ];
  return (
    <>
      <S.StatusContainer>
        {statusList.map((item, index) => (
          <StatusItem
            key={index}
            title={item.title}
            value={item.value}
            color={item.color}
            icon={item.icon}
          />
        ))}
      </S.StatusContainer>
      <S.ChartContainer>
        <SalesChart />
        <IncomesChart />
      </S.ChartContainer>
    </>
  );
};

export default Home;
