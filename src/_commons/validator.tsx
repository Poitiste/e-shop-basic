import { Field } from "../const/types"
import { regexString, regexPassword, regexMail, regexPhoneNumber, regexPostal, regexSIRET } from "./regex";

export function validatorString(name: string): Field{
    if (!regexString.test(name)) {
        const errorMsg: string = name+" n'est pas valide : 2 caractères minimum, caractères spéciaux autorisés : / ( \" - ' ) :";
        const newField: Field = { value: name, error: errorMsg, isValid: false };
        return newField;
    }
    else {
        const newField: Field = { value: name, error: "", isValid: true };
        return newField;
    }
}

export function validatorState(state: string): Field{
    const productState = ['neuf', 'occasion', 'reconditionne'];
    if (!productState.includes(state)) {
        const errorMsg: string = "seuls les options prédéfinies sont autorisées";
        const newField: Field = { value: state, error: errorMsg, isValid: false };
        return newField;
    }
    else {
        const newField: Field = { value: state, error: "", isValid: true };
        return newField;
    }
}

export function validatorBarcode(barcode: string): Field{
    if (!/^[a-zA-Z0-9]{128}/.test(barcode)) {
        const errorMsg: string = "Taille maximale de 128, chiffres & lettres autorisés";
        const newField: Field = { value: barcode, error: errorMsg, isValid: false };
        return newField;
    }
    else {
        const newField: Field = { value: barcode, error: "", isValid: true };
        return newField;
    }
}

export function validatorQuantity(quantity: string): Field{
    if (!/^[0-9]{1,2}/.test(quantity)) {
        const errorMsg: string = "chiffres de 1 à 99 autorisés";
        const newField: Field = { value: quantity, error: errorMsg, isValid: false };
        return newField;
    }
    else {
        const newField: Field = { value: quantity, error: "", isValid: true };
        return newField;
    }
}

export function validatorCategory(category: string): Field{
    if (!/^[a-zA-Z0-9 ]{128}/.test(category)) {
        const errorMsg: string = "Taille maximale de 128, chiffres & lettres autorisés";
        const newField: Field = { value: category, error: errorMsg, isValid: false };
        return newField;
    }
    else {
        const newField: Field = { value: category, error: "", isValid: true };
        return newField;
    }

}

export function validatorPasword(password: string): Field{
    if(!regexPassword.test(password)){
        const errorMsg: string = 'Le mot de passe doit contenir 8 caractères minimum dont une majuscule, minuscule, un chiffre et un caratère spécial.';
        const newField: Field = { value: password, error: errorMsg, isValid: false };
        return newField;
    }
    else{
        const newField: Field = { value: password, error: '', isValid: true };
        return newField;
    }
    
}

export function validatorMail(mail: string): Field{
    if (regexMail.test(mail)) {
        const newField: Field = { value: mail, error: '', isValid: true };
        return newField;
    }
    else {
        const errorMsg: String = 'Veuillez rentrer un mail valide';
        const newField: Field = { value: mail, error: errorMsg, isValid: false };
        return newField;
    }
}

export function validatorPhoneNumber(phoneNumber: string): Field{
    if(regexPhoneNumber.test(phoneNumber)){
        const newField: Field = { value: phoneNumber, error: '', isValid: true};
        return newField;
    }
    else{
        const errorMsg = "Le numéro de téléphone doit faire 10 chiffres en commençant par 0";
        const newField: Field = { value: phoneNumber, error: errorMsg, isValid: false };
        return newField;
    }
}

export function validatorSIRET(siret: string): Field{
    if(regexSIRET.test(siret)){
        const newField: Field = { value: siret, error: '', isValid: true};
        return newField;
    }
    else{
        const errorMsg = "Le numéro de SIRET doit faire 14 chiffres";
        const newField: Field = { value: siret, error: errorMsg, isValid: false };
        return newField;
    }
}

export function validatorPostal(postal: string): Field{
    if(regexPostal.test(postal)){
        const newField: Field = { value: postal, error: '', isValid: true};
        return newField;
    }
    else{
        const errMsg = "Le code postal doit contenir 5 chiffres";
        const newField: Field = { value: postal, error: errMsg, isValid: false};
        return newField;
    }
}