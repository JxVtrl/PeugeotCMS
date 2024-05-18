import React, { useState } from 'react';
import * as S from './styles';
import ProjectLogo from '../ProjectLogo';
import { useMenu } from '@/context';
import { useRouter } from 'next/router';
import { RoutesData } from '@/data/routesList';
import { useDevice } from '@/hooks';
import { IoIosArrowForward } from 'react-icons/io';

const Menu: React.FC = () => {
  const { menuAbsolute, showMenu, setMiniMenu, miniMenu }: any = useMenu();
  const { isMobile } = useDevice();
  const router = useRouter();

  const [accordionShow, setAccordionShow] = useState<number | null>(null);

  const handleChangeRoute = (route: string) => {
    router.push(route);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setMiniMenu(menuAbsolute);
  };

  return (
    <S.MenuContainer
      showMenu={showMenu}
      minimized={isMobile ? false : miniMenu}
      onMouseEnter={() => setMiniMenu(false)}
      onMouseLeave={() => {
        handleMouseLeave();
      }}
    >
      <ProjectLogo />

      {RoutesData.map(
        (
          { title, icon, id, route, visible, accordion, accordionVisible },
          index,
        ) => {
          return (
            visible && (
              <React.Fragment key={index}>
                <S.MenuItem
                  onClick={() => {
                    if (
                      accordion &&
                      accordion?.length > 0 &&
                      accordionVisible
                    ) {
                      if (accordionShow === index) setAccordionShow(null);
                      else setAccordionShow(index);
                    } else handleChangeRoute(route);
                  }}
                  active={route === router.pathname}
                >
                  <S.ItemInfo>
                    <S.MenuItemIcon>{icon}</S.MenuItemIcon>
                    {miniMenu || <S.MenuItemTitle>{title}</S.MenuItemTitle>}
                  </S.ItemInfo>
                  {accordionVisible &&
                    !miniMenu &&
                    accordion &&
                    accordion?.length > 0 && (
                      <IoIosArrowForward
                        style={{
                          transform:
                            accordionShow === index
                              ? 'rotate(90deg)'
                              : 'rotate(0deg)',
                          transition: 'all 0.2s ease-in-out',
                        }}
                      />
                    )}
                </S.MenuItem>
                {accordion && accordion?.length > 0 && accordionVisible && (
                  <S.MenuItemAccordionContainer
                    show={miniMenu ? false : accordionShow === index}
                    height={accordion?.length * 42}
                  >
                    {accordion?.map(({ id, route, title }, index) => (
                      <S.MenuItemAccordion
                        key={index}
                        onClick={() => router.push(route)}
                        active={route === router.pathname}
                      >
                        <div
                          style={{
                            paddingLeft: '16px',
                          }}
                        />
                        {miniMenu || <S.MenuItemTitle>{title}</S.MenuItemTitle>}
                      </S.MenuItemAccordion>
                    ))}
                  </S.MenuItemAccordionContainer>
                )}
              </React.Fragment>
            )
          );
        },
      )}
    </S.MenuContainer>
  );
};

export default Menu;
