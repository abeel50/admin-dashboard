import { Order } from "../_interfaces";

export const ORDERS: Order[] = [
    {
        id: 1,
        phone: "9876543210",
        totalPrice: 50,
        address: "123 Main Street",
        status: 1,
        deliveryGuy: 1,
    },

    {
        id: 2,
        phone: "9876543210",
        totalPrice: 25,
        address: "456 Main Street",
        status: 2,
        deliveryGuy: 2
    },

    {
        id: 3,
        phone: "9876543210",
        totalPrice: 100,
        address: "123 Oak Street",
        status: 3,
        deliveryGuy: 4
    },
    {
        id: 4,
        phone: "9876543210",
        totalPrice: 50,
        address: "123 Main Street",
        status: 1,
        deliveryGuy: null
    },

    {
        id: 5,
        phone: "9876543210",
        totalPrice: 25,
        address: "456 Main Street",
        status: 2,
        deliveryGuy: 6
    },

    {
        id: 6,
        phone: "9876543210",
        totalPrice: 100,
        address: "123 Oak Street",
        status: 3,
        deliveryGuy: 5

    },
]