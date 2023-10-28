import Product from "./product";

export default class Checkout {
    private idCheckout: number;
    private idCustomer: number;
    private finalPrice: number;
    public products: Product[];

    constructor(
        idCheckout: number,
        idCustomer: number,
        products: Product[] = [
            {
                id: 0,
                name: "nom",
                brand: "marque",
                barcode: "0000000000000",
                state: "neuf",
                description: "description",
                quantity: 1,
                picture: "http://...",
                categories: ['stockage', 'disque_dur', 'ssd'],
                price: 99.99,
                created: new Date(),
                updated: new Date(),
                sold: 0
            }
        ],
        finalPrice: number
    ) {
        this.idCheckout = idCheckout;
        this.idCustomer = idCheckout;
        this.products = products;
        this.finalPrice = products.reduce(function (accumulator, curValue) {
            return accumulator + ( curValue.price * curValue.quantity )
        }, 0)
    }
}