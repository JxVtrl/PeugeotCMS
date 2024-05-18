import { useMenu } from "@/context";
import { useDevice } from "@/hooks";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import * as S from "./styles";
import Image from "next/image";

const ProjectLogo: React.FC = () => {
  const router = useRouter();
  const { setMenuAbsolute, menuAbsolute, setShowMenu, miniMenu }: any =
    useMenu();
  const { isMobile } = useDevice();

  const handleChangeMenu = () => {
    if (!isMobile) 
      setMenuAbsolute(!menuAbsolute);
    else 
      setShowMenu(false);
  };


  const handleHome = () => {
    router.push("/carros");
  };

  return (
    <S.Container>
      <S.LogoContainer onClick={handleHome}>
        <Image src="/shield.svg" width={32} height={32} alt='logo' />
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
