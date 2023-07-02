import Product  from "./product";

export default interface CartItem {
    product: Product;
    qty: number;
}