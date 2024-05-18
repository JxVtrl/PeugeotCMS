export interface ButtonProps {
  text?: string;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'submit' | 'reset';
}

export interface ActionButtonsProps {
  type: 'info' | 'edit' | 'delete' | 'edit-delete';
  infoAction?: () => void;
  editAction?: () => void;
  deleteAction?: () => void;
}

export interface ButtonContainerProps {
  isMobile: boolean;
}
