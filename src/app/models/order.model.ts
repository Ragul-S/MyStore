import { Product } from "./product.model";

export class Order {
    fullname: string;
    address: string;
    creditCard: string;
    products: Product[];
    total: number;

    constructor() {
        this.fullname = "";
        this.address = "";
        this.creditCard = "";
        this.products = [];
        this.total = 0;
    }
}
