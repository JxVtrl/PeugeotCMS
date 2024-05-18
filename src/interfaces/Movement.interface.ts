import { ProductProps } from "./Product.interface";

export interface MovementProps {
    id: number;
    type: 'income' | 'outcome';
    date: string;
    products: ProductProps[];
    operator: string;
}