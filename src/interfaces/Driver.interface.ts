export type DriverProps = {
  id: string | number;
  name: string;
  cpf: string;
  email: string;
  phone: string;
  seller_code: string;
  schedule: string;
  car: string;
};

export type DriversList = {
  future: DriverProps[];
  past: DriverProps[];
};