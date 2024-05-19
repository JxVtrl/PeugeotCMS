export interface HeaderProps {
  inputLabel?: string;
  inputPlaceholder?: string;
  inputValue: string;
  inputOnChange: (e: any) => void;
  handleButton: () => void;
}
