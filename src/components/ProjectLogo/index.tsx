import { useApp } from "@/context";
import { useDevice } from "@/hooks";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import * as S from "./styles";

const ProjectLogo: React.FC = () => {
  const router = useRouter();
  const { setMenuAbsolute, menuAbsolute, setShowMenu, miniMenu }: any =
    useApp();
  const { isMobile } = useDevice();

  const handleChangeMenu = () => {
    if (!isMobile) 
      setMenuAbsolute(!menuAbsolute);
    else 
      setShowMenu(false);
  };


  const handleHome = () => {
    router.push("/home");
  };

  return (
    <S.Container>
      <S.LogoContainer onClick={handleHome}>
        <h1>{miniMenu ? "L" : "Logo"}</h1>
      </S.LogoContainer>
      {!miniMenu && (

      <S.ButtonContainer isMobile={isMobile} onClick={handleChangeMenu}>
          {!menuAbsolute && !isMobile ? <S.Button /> : isMobile ? <AiOutlineClose /> : <></>}
      </S.ButtonContainer>
      )}
    </S.Container>
  );
};

export default ProjectLogo;
