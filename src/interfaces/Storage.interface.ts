import { MovementProps } from "./Movement.interface";
import { ProductProps } from "./Product.interface";

export interface StorageLocationsProps {
    id: number;
    name: string;
    obs: string;
    products: ProductProps[] | null;
    movements: MovementProps[] | null;
}