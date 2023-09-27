export default class Product{
    id: number;
    name: string;
    brand: string;
    barcode: string;
    state: string;
    description: string;
    quantity: number;
    picture: string;
    firstCategory: string;
    secondCategory: string;
    thirdCategory: string;
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
        firstCategory: string="Stockage",
        secondCategory: string="Disque dur",
        thirdCategory: string="SSD",
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
        this.firstCategory = firstCategory;
        this.secondCategory= secondCategory;
        this.thirdCategory=thirdCategory
        this.price=price;
        this.created = created;
        this.updated = updated;
        this.bestSeller = bestSeller;
    };
}