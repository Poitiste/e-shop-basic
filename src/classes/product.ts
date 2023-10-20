export default class Product{
    id: number;
    name: string;
    brand: string;
    barcode: string;
    state: string;
    description: string;
    quantity: number;
    picture: string;
    categories: Array<string>;
    price: number;
    created: Date;
    updated: Date;
    bestSeller : boolean;

    constructor(
        id:number,
        name: string="nom",
        brand: string="marque",
        barcode: string="0000000000000",
        state: string="neuf",
        description: string="description",
        quantity: number=1,
        picture: string="http://...",
        categories: Array<string> = ['stockage','disque_dur','ssd'],
        price: number,
        created: Date = new Date(),
        updated: Date = new Date(),
        bestSeller : boolean = false
    ){
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.barcode = barcode;
        this.state = state;
        this.description = description;
        this.quantity = quantity;
        this.picture = picture;
        this.categories = categories;
        this.price=price;
        this.created = created;
        this.updated = updated;
        this.bestSeller = bestSeller;
    };
}