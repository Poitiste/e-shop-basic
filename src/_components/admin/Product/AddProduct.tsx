import { useState } from "react";
import { validatorString, validatorState, validatorBarcode, validatorQuantity, validatorCategory, validatorPrice } from "../../../_commons/validator";
import { Field, FormProduct, TagsForm, newProduct } from "../../../const/types"
import "./AddProduct.css";
import ProductService from "../../../dbFunctions/ProductService";

//source for categories,tags,chips call it what you want : https://www.youtube.com/watch?v=OwIR2HsOwWg

function AddProduct() {
    const [form, setForm] = useState<FormProduct>({
        name: { value: "", isValid: false },
        brand: { value: "", isValid: false },
        price: { value: "", isValid: false },
        barcode: { value: "", isValid: false },
        state: { value: "neuf", isValid: false },
        quantity: { value: "", isValid: false },
        description: { value: "", isValid: false },
        categories: { value: [], isValid: false },
        picture: { value: "", isValid: false }
    })
    const [tags, setTags] = useState<TagsForm>({
        tagInput: { value: "" },
        visualTags: { value: [] }
    })
    const [disabled, setDisabled] = useState<boolean>(false)

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const fieldName: string = e.target.name;
        const fieldValue: string = e.target.value;
        const newField: Field = { [fieldName]: { value: fieldValue } };
        setForm({ ...form, ...newField });
    }

    function handleChangeFile(e: React.ChangeEvent<HTMLInputElement>) {//check file type before setting
        const fileImage = e.target.files;

        if (fileImage !== null) {
            const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
            if (allowedTypes.includes(fileImage[0]?.type)) //it is an image
                setForm({ ...form, picture: { value: URL.createObjectURL(fileImage[0]), error: "", isValid: true } })
            else {
                setForm({ ...form, picture: { value: "", error: "Seuls les JPEG, PNG, & GIF sont autorisés.", isValid: false } })
            }
        }
        else
            setForm({ ...form, picture: { value: "", error: "L'image de l'objet est requise !", isValid: false } })
    }

    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let newState = form.state;
        newState.value = e.target.value;
        setForm({ ...form, state: newState });
    };

    function addChip(e: React.KeyboardEvent<HTMLInputElement>) {//insert categories & creates chips
        if (e.key === "Enter" && tags.tagInput) {
            e.preventDefault();
            let visualChips = tags.visualTags.value; //for the render
            let chips = form.categories;//for the DB

            if (chips.value === undefined || chips.value.length < 3) {
                chips.value.push(tags.tagInput.value.toLocaleLowerCase().replaceAll(" ", "_"))
                visualChips.push(tags.tagInput.value.replaceAll("_", " "))

                setForm({ ...form, categories: chips }) //add in product Form
                setTags({ tagInput: { value: "" }, visualTags: { value: visualChips } }) //add in visual
                chips.value.length < 3 ? setDisabled(false) : setDisabled(true)
            }
        }
    }

    function removeChip(index: number) { //delete categories & chips
        let chips = form.categories;
        let visualChips = tags.visualTags.value;

        chips.value.splice(index, 1);
        visualChips.splice(index, 1);

        setForm({ ...form, categories: chips }) //add in product Form
        setTags({ tagInput: { value: "" }, visualTags: { value: visualChips } }) //add in visual
        if (disabled) setDisabled(false)
    }

    const validateForm = () => {
        let newForm: FormProduct = form;

        //validator name
        let inputName = validatorString(form.name.value);
        newForm = { ...newForm, ...{ name: inputName } };

        //validator brand
        let inputBrand = validatorString(form.brand.value);
        newForm = { ...newForm, ...{ brand: inputBrand } };

        //validator barcode
        let inputBarcode = validatorBarcode(form.barcode.value);
        newForm = { ...newForm, ...{ barcode: inputBarcode } };

        //validator state
        let inputState = validatorState(form.state.value);
        newForm = { ...newForm, ...{ state: inputState } };

        //validator quantity
        let inputQuantity = validatorQuantity(form.quantity.value);
        newForm = { ...newForm, ...{ quantity: inputQuantity } };

        //validator categories
        let inputCategories = validatorCategory(form.categories.value);
        newForm = { ...newForm, ...{ categories: inputCategories } };

        //validator description
        let inputDescription = validatorString(form.description.value);
        newForm = { ...newForm, ...{ description: inputDescription } };

        //validator picture
        if (form.picture.value !== "" && form.picture.isValid)
            newForm = { ...newForm, ...{ picture: form.picture } };
        else
            newForm = { ...newForm, ...{ picture: { value: "", error: "L'image de l'objet est requise !", isValid: false } } }

        //validator price
        let inputPrice = validatorPrice(form.price);
        newForm = { ...newForm, ...{ price: inputPrice } };

        setForm(newForm);

        return (
            newForm.name.isValid &&
            newForm.brand.isValid &&
            newForm.barcode.isValid &&
            newForm.state.isValid &&
            newForm.quantity.isValid &&
            newForm.categories.isValid &&
            newForm.description.isValid &&
            newForm.picture.isValid &&
            newForm.price.isValid
        );
    }

    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        if (validateForm()) {
            const newProduct: newProduct = {
                name: form.name.value,
                brand: form.brand.value,
                barcode: form.barcode.value,
                state: form.state.value,
                description: form.description.value,
                quantity: form.quantity.value,
                picture: form.picture.value,
                categories: form.categories.value,
                price: form.price.value,
                created: new Date(),
                updated: new Date()
            }
            try {
                ProductService.addProduct(newProduct)
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <form onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault(); }} onSubmit={e => { e.preventDefault(); }} className="container">
            <div className="row">
                <div className="col s12">

                    <label htmlFor="name">Nom</label>
                    <div className="input-field">
                        <input type="text"
                            name="name"
                            placeholder="Nom de l'objet"
                            value={form.name.value}
                            onChange={handleChange}
                            required
                            className="validate"
                        />
                        <p className="helper-text" data-error={form.name.error}></p>
                    </div>

                    <label htmlFor="brand">Marque</label>
                    <div className="input-field">
                        <input type="text"
                            name="brand"
                            placeholder="Marque de l'objet"
                            value={form.brand.value}
                            onChange={handleChange}
                            required
                            className="validate"
                        />
                        <p className="helper-text" data-error={form.brand.error}></p>
                    </div>

                    <label htmlFor="price">Prix</label>
                    <div className="input-field">
                        <input type="number"
                            name="price"
                            placeholder="Prix de l'objet"
                            value={form.price.value}
                            onChange={handleChange}
                            required
                            min={0}
                            step={0.01}
                            className="validate"
                        />
                        <p className="helper-text" data-error={form.price.error}></p>
                    </div>

                    <label htmlFor="barcode">Code-barre</label>
                    <div className="input-field">
                        <input type="text"
                            name="barcode"
                            placeholder="Code-barre de l'objet"
                            value={form.barcode.value}
                            onChange={handleChange}
                            required
                            className="validate"
                        />
                        <p className="helper-text" data-error={form.barcode.error}></p>
                    </div>

                    <label htmlFor="quantity">Quantité</label>
                    <div className="input-field">
                        <input type="number"
                            name="quantity"
                            placeholder="Nombre d'exemplaires de l'objet"
                            value={form.quantity.value}
                            onChange={handleChange}
                            required
                            min={1}
                            className="validate"
                        />
                        <p className="helper-text" data-error={form.quantity.error}></p>
                    </div>


                    <label htmlFor="description">Description</label>
                    <div className="input-field">
                        <textarea id="description"
                            cols={30} rows={10}
                            name="description"
                            placeholder="Fiche détaillée de l'objet"
                            value={form.description.value}
                            onChange={e => handleChange(e)}
                            required
                            className="validate"
                        ></textarea>
                        <p className="helper-text" data-error={form.description.error}></p>
                    </div>

                    <label htmlFor="categories">Catégories</label>
                    <div className="input-field">
                        <input type="text"
                            placeholder="Catégorie..."
                            value={tags.tagInput.value}
                            onChange={(e) => setTags({ ...tags, tagInput: { value: e.target.value } })}
                            onKeyDown={e => addChip(e)}
                            disabled={disabled}
                        />
                        <div>
                            {
                                tags.visualTags.value.map((item: string, index: number) => {
                                    return (
                                        <span key={index} className="chip">{item}
                                            <span onClick={() => removeChip(index)}> X </span>
                                        </span>
                                    )
                                })
                            }
                        </div>
                        <p className="helper-text" data-error={form.categories.error}></p>
                    </div>


                    <label htmlFor="state">État de l'objet</label>
                    <select name="state"
                        onChange={e => handleChangeSelect(e)}
                        value={form.state.value}
                        className="browser-default"
                        required
                    >
                        <option value="neuf">neuf</option>
                        <option value="occasion">occasion</option>
                        <option value="reconditionne">reconditionné</option>
                    </select>

                    <br />

                    <div className="row">
                        <div className="col offset-s4 s8">
                            <input type="file"
                                name="picture"
                                onChange={e => handleChangeFile(e)}
                                required
                                className="validate"
                            />
                        </div>

                        <br />

                        <div className="col s12"><br /></div>

                        <div className="col offset-s3">
                            <div className="card-image">
                                <img src={form.picture.value} alt={form.name.value} />
                                <p className="helper-text" data-error={form.picture.error}></p>
                                <p>{form.picture.error}</p>
                            </div>
                        </div>
                    </div>

                    <button className="bg-green col offset-s5" onClick={(e) => handleSubmit(e)}>Ajouter</button>
                </div>
            </div>
        </form>
    );
}

export default AddProduct;