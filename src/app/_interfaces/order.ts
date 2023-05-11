export interface Order {
    id: number;
    customerName: string;
    phone: string;
    totalPrice: number;
    address: string;
    status: number;
    deliveryGuy: number | null;
    items: any;
}