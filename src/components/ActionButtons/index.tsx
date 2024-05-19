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
  
  const renderContent = () => {
    switch (type) {
      case 'info':
        return <FiInfo onClick={infoAction} />;
      case 'edit':
        return <AiOutlineEdit onClick={editAction} />;
      case 'delete':
        return <BsTrash onClick={deleteAction} />;
      case 'edit-delete':
        return (
          <>
            <AiOutlineEdit onClick={editAction} />
            <BsTrash onClick={deleteAction} />
          </>
        );
      default:
        return <FiInfo onClick={infoAction} />;
    }
  }
  
  
  return (
    <S.ActionButtons>
      {renderContent()}
    </S.ActionButtons>
  );
};

export default ActionButtons;
