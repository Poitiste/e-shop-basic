import Product from "../models/product";
import User from "../models/user";

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

export type FormProduct = {
    name: Field,
    brand: Field,
    barcode: Field,
    state: Field,
    quantity: Field,
    description: Field,
    firstCategory: Field,
    secondCategory: Field,
    thirdCategory: Field,
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