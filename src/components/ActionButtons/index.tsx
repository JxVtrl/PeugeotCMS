import React from 'react';
import * as S from './styles';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { ActionButtonsProps } from '@/interfaces/Button.interface';
import { FiInfo } from 'react-icons/fi';

const ActionButtons = ({
  type = 'info',
  infoAction,
  editAction,
  deleteAction,
}: ActionButtonsProps) => {
  return (
    <S.ActionButtons>
      {type === 'info' && <FiInfo onClick={infoAction} />}
      {type === 'edit' && <AiOutlineEdit onClick={editAction} />}
      {type === 'delete' && <BsTrash onClick={deleteAction} />}
      {type === 'edit-delete' && (
        <>
          <AiOutlineEdit onClick={editAction} />
          <BsTrash onClick={deleteAction} />
        </>
      )}
    </S.ActionButtons>
  );
};

export default ActionButtons;
