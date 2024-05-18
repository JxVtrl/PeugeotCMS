import { usePageTitle } from "@/hooks/usePageTitle";
import { useRouter } from "next/router";
import React,{useEffect} from "react";

const Estoque: React.FC = () => {
  usePageTitle("Taylor Dashboard - Estoque");

  const router = useRouter();

  useEffect(() => {
    router.push("/estoque/produtos");
  }, [router]);

  return <></>;
};

export default Estoque;
