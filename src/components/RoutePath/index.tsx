import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MdKeyboardArrowRight } from "react-icons/md";
import { routeTitle } from "@/utils/routeTitle";

import * as S from "./styles";

const RoutePath: React.FC = () => {
  const [pathArray, setPathArray] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const path = router.pathname.split("/");
    path.shift();
    path.forEach((item, index) => {
      if (index > 0) {
        path[index] = `${path[index - 1]}/${item}`;
      } else {
        path[index] = `/${item}`;
      }
    });
    
    setPathArray(path);
  }, [router.pathname]);

  return (
    <p>
      {pathArray.map((item, index) => {
        console.log(item, index)
        
        const text = routeTitle(item);
        
        if (item && text) {
          return (
            <React.Fragment key={index}>
              <MdKeyboardArrowRight color="#6e6b7b" />
              <S.Span key={index} onClick={()=> router.push(item)}>
                {text}
              </S.Span>
            </React.Fragment>
          );
        }
      })}
    </p>
  );
};

export default RoutePath;
