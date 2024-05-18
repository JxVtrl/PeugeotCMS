import { useDevice } from "@/hooks";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

const MenuContext = createContext({});

export function MenuProvider({ children }: any) {
  const [menuAbsolute, setMenuAbsolute] = useState<boolean>(false);
  const [miniMenu, setMiniMenu] = useState<boolean>(false);
  const [appPadding, setAppPadding] = useState<number>(275);
  const [nightMode, setNightMode] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { isMobile } = useDevice();

  const handleCloseMenu = () => {
    if (isMobile && showMenu) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (isMobile) {
      setShowMenu(false);
      setAppPadding(28);
    } else {
      setShowMenu(true);
      setMiniMenu(false);
      setAppPadding(menuAbsolute ? 108 : 288);
    }
  }, [menuAbsolute, isMobile]);

  const value = {
    setMenuAbsolute,
    menuAbsolute,
    appPadding,
    setNightMode,
    nightMode,
    showMenu,
    setShowMenu,
    miniMenu,
    setMiniMenu,handleCloseMenu,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function useMenu() {
  return useContext(MenuContext);
}
