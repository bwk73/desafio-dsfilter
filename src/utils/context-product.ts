import { createContext } from "react";


export type ProductCounterType = {
    productCounter: number;
    setProductCounter: (productCounter: number) => void;
}

export const ProductCounter = createContext<ProductCounterType>({
    productCounter: 0,
    setProductCounter: () => {},
});