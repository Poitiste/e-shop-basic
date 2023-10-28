import Product from "../classes/product";
import User from "../classes/user";

export type Props = {
    formProduct: FormProduct,
    product: Product,
    formUser: FormUser,
    user: User,
}

export type Field = {
    value?: any,
    error?: String,
    isValid?: boolean
}

export type TagsForm = {
    tagInput: Field,
    visualTags : Field
}

export type newProduct = {
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
}

export type FormProduct = {
    name: Field,
    brand: Field,
    price: Field,
    barcode: Field,
    state: Field,
    quantity: Field,
    description: Field,
    categories: Field,
    picture: Field
}

export type FormUser = {
    firstName : Field,
    lastName : Field,
    mail : Field,
    siret : Field,
    phoneNumber : Field,
    address : Field,
    postal : Field,
    city : Field,
    password : Field,
    confirmPassword: Field,
}