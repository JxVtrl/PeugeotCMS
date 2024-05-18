import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import * as S from './styles';
import { useRouter } from 'next/router';
import Avatar from '../Avatar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDevice } from '@/hooks';
import VerticalLine from '../VerticalLine';
import { RoutesData } from '@/data/routesList';
import ChangeTheme from '../ChangeTheme';
import { useApp } from '@/context';
import RoutePath from '../RoutePath';

const AppBar: React.FC = () => {
  const { isMobile } = useDevice();
  const { setShowMenu }: any = useApp();

  const router = useRouter();

  const handleNavigateHome = () => {
    router.push('/home');
  };

  const getTitle = () =>
    router.pathname.replaceAll('/', '')
      ? RoutesData.find(item => {
        return item.route === router.pathname;
      })?.title
      : 'Home'


  return (
    <S.Container>
      <S.Content>
        <S.LeftOptions>
          {isMobile ? (
            <GiHamburgerMenu onClick={() => setShowMenu(true)} />
          ) : (
            <ChangeTheme />
          )}
        </S.LeftOptions>
        <S.RightOptions>
          {/* {user && (
            <>
              <p>{user?.displayName}</p>
              {user?.photoURL && (
                <Avatar src={user.photoURL} alt={'foto perfil'} />
              )}
            </>
          )} */}
        </S.RightOptions>
      </S.Content>
      <S.FootContent>
        <h1>
          {getTitle()}
        </h1>
        <VerticalLine height={20} color="#d6dce1" />
        <S.FootPaths>
          <BiHomeAlt
            color="#175673"
            onClick={handleNavigateHome}
            cursor="pointer"
          />
          <RoutePath />
        </S.FootPaths>
      </S.FootContent>
    </S.Container>
  );
};

export default AppBar;
