import React from 'react';
import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Modal as ModalContainer,
} from '@chakra-ui/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  closeBtn?: boolean;
  buttons?: {
    label: string;
    onClick: () => void;
    variant?: 'ghost' | 'outline' | 'solid' | 'link' | 'unstyled';
    colorScheme?:
      | 'whiteAlpha'
      | 'blackAlpha'
      | 'gray'
      | 'red'
      | 'orange'
      | 'yellow'
      | 'green'
      | 'teal'
      | 'blue'
      | 'cyan'
      | 'purple'
      | 'pink'
      | 'linkedin'
      | 'facebook'
      | 'messenger'
      | 'whatsapp'
      | 'twitter'
      | 'telegram';
  }[];
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  closeBtn,
  buttons,
  children,
}) => {
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent style={{
        width: '100%',
        maxWidth: '650px',
      }}>
        {title && <ModalHeader>{title}</ModalHeader>}
        {closeBtn && <ModalCloseButton />}
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          {buttons?.map(button => (
            <Button
              key={button.label}
              variant={button.variant}
              onClick={button.onClick}
              colorScheme={button.colorScheme}
            >
              {button.label}
            </Button>
          ))}
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
