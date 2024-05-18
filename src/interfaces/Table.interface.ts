export interface TableProps {
  columns: {
    title: string;
    field: string;
  }[];
  rows: {
    [key: string]: string | React.ReactNode;
  }[];
}
