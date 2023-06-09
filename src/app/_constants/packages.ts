import { Package } from "../_interfaces";

export const PACKAGES: Package[] = [
    {
        id: 1,
        title: 'Packag-1',
        totalPrice: 50,
        products: [
            { id: 1, productID: 1, weight: 10 },
            { id: 2, productID: 2, weight: 12 },
            { id: 3, productID: 3, weight: 19 },
        ]
    },
    {
        id: 2,
        title: 'Packag-2',
        totalPrice: 25,
        products: [
            { id: 1, productID: 2, weight: 8 },
            { id: 2, productID: 3, weight: 15 },
            { id: 3, productID: 4, weight: 22 },
        ]
    },
    {
        id: 3,
        title: 'Packag-3',
        totalPrice: 80,
        products: [
            { id: 1, productID: 1, weight: 13 },
            { id: 2, productID: 4, weight: 18 },
            { id: 3, productID: 5, weight: 25 },
        ]
    },
    {
        id: 4,
        title: 'Packag-4',
        totalPrice: 35,
        products: [
            { id: 1, productID: 3, weight: 9 },
            { id: 2, productID: 5, weight: 14 },
            { id: 3, productID: 6, weight: 20 },
        ]
    },
    {
        id: 5,
        title: 'Packag-5',
        totalPrice: 65,
        products: [
            { id: 1, productID: 2, weight: 11 },
            { id: 2, productID: 4, weight: 16 },
            { id: 3, productID: 6, weight: 21 },
        ]
    },
    {
        id: 6,
        title: 'Packag-6',
        totalPrice: 45,
        products: [
            { id: 1, productID: 1, weight: 14 },
            { id: 2, productID: 3, weight: 17 },
            { id: 3, productID: 6, weight: 23 },
        ]
    }
]
