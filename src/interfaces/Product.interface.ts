export interface ProductProps {
    id: number;
    name: string;
    product_code: string;
    sale_price: number;
    product_type: string;
    measurement_unit: string;
    product_ncm: string;
    width: number;
    height: number;
}

export interface ProductAddedProps {
    id: number;
    name: string;
    purchaseValue?: number | string;
    saleValue?: number | string;
    quantity: number;
    icms: number;
    movementType: string;
}