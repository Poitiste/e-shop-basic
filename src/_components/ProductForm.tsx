import React, { FunctionComponent, ReactEventHandler, useEffect, useState } from "react";
import Product from "../models/product";
import { Link, redirect, useParams } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import { Props, Field, FormProduct } from "../_commons/types"
import { validatorString, validatorState, validatorBarcode, validatorQuantity, validatorCategory } from "../_commons/validator"

const ProductForm: FunctionComponent<Props> = ({ product }) => {
    const [form, setForm] = useState<FormProduct>({
        name: { value: product.name, isValid: true },
        brand: { value: product.brand, isValid: true },
        barcode: { value: product.barcode, isValid: true },
        state: { value: product.state, isValid: true },
        quantity: { value: product.quantity, isValid: true },
        description: { value: product.description, isValid: true },
        firstCategory: { value: product.firstCategory, isValid: true },
        secondCategory: { value: product.secondCategory, isValid: true },
        thirdCategory: { value: product.thirdCategory, isValid: true },
        picture: { value: product.picture, isValid: true }
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName: string = e.target.name;
        const fieldValue: string = e.target.value;
        const newField: Field = { [fieldName]: { value: fieldValue } };
        setForm({ ...form, ...newField });
    }

    const validateForm = () => {
        let newForm: FormProduct = form;

        //validator name
        let inputName = validatorString(form.name.value);
        if (inputName.isValid)
            newForm = { ...newForm, ...{ name: inputName, updated: new Date() } };
        else
            newForm = { ...newForm, ...{ name: inputName } };

        //validator brand
        let inputBrand = validatorString(form.brand.value);
        if (inputBrand.isValid)
            newForm = { ...newForm, ...{ brand: inputBrand, updated: new Date() } };
        else
            newForm = { ...newForm, ...{ brand: inputBrand } };

        //validator barcode
        let inputBarcode = validatorBarcode(form.barcode.value);
        if (inputBarcode.isValid)
            newForm = { ...newForm, ...{ barcode: inputBarcode, updated: new Date() } };
        else
            newForm = { ...newForm, ...{ barcode: inputBarcode } };

        //validator state about the product
        let inputState = validatorState(form.state.value);
        if (inputState.isValid)
            newForm = { ...newForm, ...{ state: inputState, updated: new Date() } };
        else
            newForm = { ...newForm, ...{ state: inputState } };

        //validator quantity
        let inputQuantity = validatorQuantity(form.quantity.value);
        if (inputQuantity.isValid)
            newForm = { ...newForm, ...{ quantity: inputQuantity, updated: new Date() } };
        else
            newForm = { ...newForm, ...{ quantity: inputQuantity } };

        //validator categories
        let inputFirstCategory = validatorCategory(form.firstCategory.value);
        let inputSecondCategory = validatorCategory(form.secondCategory.value);
        let inputThirdCategory = validatorCategory(form.thirdCategory.value);

        //first category
        if (inputFirstCategory.isValid)
            newForm = { ...newForm, ...{ firstCategory: inputFirstCategory, updated: new Date() } };
        else
            newForm = { ...newForm, ...{ firstCategory: inputFirstCategory } };

        //second category
        if (inputSecondCategory.isValid)
            newForm = { ...newForm, ...{ secondCategory: inputSecondCategory, updated: new Date() } };
        else
            newForm = { ...newForm, ...{ secondCategory: inputSecondCategory } };

        //third category
        if (inputThirdCategory.isValid)
            newForm = { ...newForm, ...{ thirdCategory: inputThirdCategory, updated: new Date() } };
        else
            newForm = { ...newForm, ...{ thirdCategory: inputThirdCategory } };

        //validator description
        let inputDescription = validatorString(form.description.value);
        if (inputDescription.isValid)
            newForm = { ...newForm, ...{ description: inputDescription, updated: new Date() } };
        else 
            newForm = { ...newForm, ...{ description: inputDescription } };

        setForm(newForm);

        return (
            newForm.name.isValid &&
            newForm.brand.isValid &&
            newForm.barcode.isValid &&
            newForm.state.isValid &&
            newForm.quantity.isValid &&
            newForm.description.isValid &&
            newForm.firstCategory.isValid &&
            newForm.secondCategory.isValid &&
            newForm.thirdCategory.isValid &&
            newForm.picture.isValid
        );
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isFormatValid = validateForm();
        if (isFormatValid) {
            return redirect("/shop/news");
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col s12 m12 l8 offset-l2">
                        <form action="#" method="post">
                            <div className="card-image">
                                <div id="image-product">
                                    {
                                        //TODO : afficher l'image ajoutée du formulaire ici en prévisualisation
                                        <img src={product.picture}
                                            alt={product.name}
                                            style={{ width: '200px', maxWidth: '500px', margin: '0 auto' }}
                                        />
                                    }
                                </div>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <label htmlFor="categories">Catégories </label>
                                    <div className="chips chips-placeholder chips-autocomplete" onChange={handleInputChange}></div>

                                    <label htmlFor="name">Nom </label>
                                    <input type="text" name='name'
                                        value={form.name.value} onChange={e => handleInputChange}
                                    />
                                    {
                                        form.name.error &&
                                        <div className="card-panel red accent-1">
                                            {form.name.error}
                                        </div>
                                    }

                                    <label htmlFor="brand">Marque </label>
                                    <input type="text" name='brand'
                                        value={form.brand.value}
                                        onChange={e => handleInputChange}
                                    />
                                    {
                                        form.brand.error &&
                                        <div className="card-panel red accent-1">
                                            {form.brand.error}
                                        </div>
                                    }

                                    <label htmlFor="barCode">Code barre</label>
                                    <input type="text" name='barcode'
                                        value={form.barcode.value}
                                        onChange={e => handleInputChange}
                                    />
                                    {
                                        form.barcode.error &&
                                        <div className="card-panel red accent-1">
                                            {form.barcode.error}
                                        </div>
                                    }

                                    <label htmlFor="state">État </label>
                                    <select name="state">
                                        <option value="neuf">Neuf</option>
                                        <option value="occasion">Occasion</option>
                                        <option value="reconditionne">Reconditionné</option>
                                    </select>
                                    {
                                        form.state.error &&
                                        <div className="card-panel red accent-1">
                                            {form.state.error}
                                        </div>
                                    }

                                    <label htmlFor="quantity">Quantité </label>
                                    <input type="number" name="quantity"
                                        defaultValue={1} step={1}
                                        value={form.quantity.value}
                                        onChange={e => handleInputChange}
                                    />
                                    {
                                        form.quantity.error &&
                                        <div className="card-panel red accent-1">
                                            {form.quantity.error}
                                        </div>
                                    }

                                    <label htmlFor="description">Description </label>
                                    <textarea name="description" cols={30} rows={10}
                                        placeholder='fiche technique détaillée'
                                        value={form.description.value}
                                        onChange={e => handleInputChange}
                                    ></textarea>
                                    {
                                        form.description.error &&
                                        <div className="card-panel red accent-1">
                                            {form.description.error}
                                        </div>
                                    }

                                    <input type="submit" value={"Valider"} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;