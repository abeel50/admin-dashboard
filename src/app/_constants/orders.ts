import { Order } from "../_interfaces";

export const ORDERS: Order[] = [
    {
        id: 1,
        phone: "9876543210",
        customerName: 'William',
        address: "123 Main Street",
        status: 1,
        deliveryGuy: 1,
        totalPrice: 50,
        items: [
            { id: 1, productName: 'Product A', quantity: 2, price: 20.00 },
            { id: 2, productName: 'Product B', quantity: 1, price: 15.00 },
            { id: 3, productName: 'Product C', quantity: 3, price: 20.00 }
        ]
    },

    {
        id: 2,
        phone: "9876543211",
        customerName: 'Jane Smith',
        address: "456 Oak Street",
        status: 2,
        deliveryGuy: 2,
        totalPrice: 75,
        items: [
            { id: 4, productName: 'Product D', quantity: 1, price: 25.00 },
            { id: 5, productName: 'Product E', quantity: 2, price: 12.50 },
            { id: 6, productName: 'Product F', quantity: 3, price: 8.99 }
        ]
    },

    {
        id: 3,
        phone: "9876543212",
        customerName: 'Bob Johnson',
        address: "789 Maple Avenue",
        status: 3,
        deliveryGuy: 1,
        totalPrice: 42.75,
        items: [
            { id: 7, productName: 'Product G', quantity: 1, price: 17.25 },
            { id: 8, productName: 'Product H', quantity: 2, price: 6.25 },
            { id: 9, productName: 'Product I', quantity: 3, price: 3.75 }
        ]
    },
    {
        id: 4,
        phone: "9876543213",
        customerName: 'Mary Lee',
        address: "321 Elm Street",
        status: 2,
        deliveryGuy: 3,
        totalPrice: 60,
        items: [
            { id: 10, productName: 'Product J', quantity: 4, price: 10.00 },
            { id: 11, productName: 'Product K', quantity: 1, price: 25.00 },
            { id: 12, productName: 'Product L', quantity: 2, price: 12.50 }
        ]
    }
    ,
    {
        id: 5,
        phone: "9876543214",
        customerName: 'Alex Brown',
        address: "555 Pine Street",
        status: 1,
        deliveryGuy: 2,
        totalPrice: 31.95,
        items: [
            { id: 13, productName: 'Product M', quantity: 1, price: 7.95 },
            { id: 14, productName: 'Product N', quantity: 3, price: 6.00 },
            { id: 15, productName: 'Product O', quantity: 2, price: 9.00 }
        ]
    },

]