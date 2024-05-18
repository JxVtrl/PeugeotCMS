import { AvatarProps } from "@/interfaces/Avatar.interface";
import { getAuth } from "firebase/auth";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import * as S from "./styles";

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => setOpenMenu(!openMenu);

  const auth = getAuth();

  return (
    <>
      <S.Container onClick={handleClick}>
        <Image
          unoptimized
          loader={() => src}
          src={src}
          alt={alt}
          width={40}
          height={40}
        />
        <S.AvatarSelect active={openMenu}>
          <S.AvatarSelectItem onClick={() => auth.signOut()}>Sair</S.AvatarSelectItem>
        </S.AvatarSelect>
      </S.Container>
    </>
  );
};

export default Avatar;
