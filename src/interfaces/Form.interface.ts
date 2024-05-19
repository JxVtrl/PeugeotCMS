import { ButtonProps } from './Button.interface';

export interface NewFormProps {
  title: string;
  buttons: ButtonProps[];
  items: FormItemProps[];
  children?: React.ReactNode;
  headChildren?: React.ReactNode;
}

export interface FormItemProps {
  label: string;
  placeholder: string;
  type?: 'text' | 'number' | 'select' | 'checkbox';
  mask?: 'currency' | 'percentage' | 'cpf' | 'cnpj' | 'phone' | 'cep' | 'date';
  required?: boolean;
  data?: any[];
  value: string | number;
  onChange: (value: any) => void;
}

export interface FormColumnProps {
  title: string;
  field: string;
}
