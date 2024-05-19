import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import * as S from './styles';
import { useRouter } from 'next/router';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDevice } from '@/hooks';
import VerticalLine from '../VerticalLine';
import { RoutesData } from '@/data/routesList';
import ChangeTheme from '../ChangeTheme';
import { useMenu } from '@/context';
import RoutePath from '../RoutePath';

const AppBar: React.FC = () => {
  const { isMobile } = useDevice();
  const { setShowMenu }: any = useMenu();

  const router = useRouter();

  const handleNavigateHome = () => {
    // router.push('/');
  };

  const getTitle = () => {
    const allRoutes = RoutesData.flatMap(route =>
      route.accordion ? [route, ...route.accordion] : [route],
    );

    const currentRoute = allRoutes.find(
      route => route.route === router.pathname,
    );

    return currentRoute ? currentRoute.title : 'Página não encontrada';
  };

  return (
    <S.Container>
      {isMobile && (
        <S.Content>
          <S.LeftOptions>
            {isMobile && <GiHamburgerMenu onClick={() => setShowMenu(true)} />}
          </S.LeftOptions>
        </S.Content>
      )}
      <S.FootContent>
        <h1>{getTitle()}</h1>
        {!isMobile && <VerticalLine height={20} color="#d6dce1" />}
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
