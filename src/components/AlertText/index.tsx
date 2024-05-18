import { AlertTextProps } from '@/interfaces/Text.interface';
import React from 'react';
import { AiOutlineWarning } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';

import * as S from './styles';

const AlertText: React.FC<AlertTextProps> = ({type = 'alert',text}) => {
    return <S.WarningContainer>
        {type === 'error' && <BiErrorCircle color="#ff4d4f" />}
        {type === 'alert' && <AiOutlineWarning color="#ff9f43" />}
          <S.WarningText type={type} >
            {text}
          </S.WarningText>
        </S.WarningContainer>;
}

export default AlertText;