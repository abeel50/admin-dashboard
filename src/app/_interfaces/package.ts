import { PackageProduct } from "./packageProduct";

export interface Package {
    id: number;
    title: string;
    totalPrice: number;
    products: PackageProduct[];

}