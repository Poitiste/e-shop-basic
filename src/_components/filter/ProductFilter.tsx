import { useEffect, useState } from "react";
import { Field } from "../../const/types"
import "./ProductFilter.css";
import axios from "axios";
//import ProductList from "../../pages/ProductList";

type Form = {
    name: Field,
    brand: Field,
    quantity: Field,
    priceMin: Field,
    priceMax: Field,
    categoryInput: Field,
    categoriesChips: Array<Object>
}

export default function ProductFilter() {
    const [filters, setFilters] = useState<Form>({
        name: { value: '' },
        brand: { value: '' },
        quantity: { value: '' },
        priceMin: { value: '' },
        priceMax: { value: '' },
        categoryInput: { value: '' },
        categoriesChips: []
    });
    const [categories, setCategories] = useState<Array<string>>([]);

    useEffect(() => {
        let chipValue: Array<string> = [];
        axios.get("http://localhost:3001/categories")
            .then((res) => {
                for (const key in res.data) {
                    if (Object.prototype.hasOwnProperty.call(res.data, key)) {
                        chipValue.push(res.data[key]);
                    }
                }
                setCategories(chipValue);
            })
    });


    const searchCategories = async (term: string) => {
        await axios.get(`http://localhost:3001/categories?q=${term}`)
            .then(res => {
                console.log("searchCategories : res.data", res.data)
                res.data.filter((suggest: { name: string; }) => {
                    const lowerTerm = term.toLocaleLowerCase();
                    const lowerSuggest = suggest.name.toLowerCase();
                    return lowerTerm && lowerSuggest.startsWith(lowerTerm)
                })
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const fieldName: string = e.target.name;
        const fieldValue: string = e.target.value;
        const newField: Field = { [fieldName]: { value: fieldValue } };
        setFilters({ ...filters, ...newField });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="left" id="productFilter">
                <h3>Rechercher un produit</h3>

                <form action="" method="get" className="row" id="formFilters" onSubmit={(e) => handleSubmit(e)}>
                    <p>Filtres de bases ^</p>
                    <div id="basicFilters" className="col s12">
                        <div id="basicInputs" className="col s12 m8 offset-m2">

                            <span>Nom
                                <input type="text" name="name"
                                    placeholder="nom"
                                    value={filters.name.value}
                                    onChange={(e) => handleChange(e)}
                                />
                            </span>
                            <span>Marque
                                <input type="text" name="brand"
                                    placeholder="marque"
                                    value={filters.brand.value}
                                    onChange={(e) => handleChange(e)}
                                />
                            </span>
                            <span>Quantité
                                <input type="number"
                                    name="quantity" min={0}
                                    placeholder="quantité"
                                    value={filters.quantity.value}
                                    onChange={(e) => handleChange(e)}
                                />
                            </span>
                            <div id="price">
                                <p>Prix</p>
                                <div id="priceInputs">
                                    <p className="col s1">Min</p>
                                    <input type="number"
                                        name="priceMin"
                                        min={0}
                                        className="col s4"
                                        placeholder="0 €"
                                        value={filters.priceMin.value}
                                        onChange={(e) => handleChange(e)}
                                    />
                                    <p className="col s1">Min</p>
                                    <input type="number"
                                        name="priceMax"
                                        min={0}
                                        className="col s4"
                                        placeholder="9999 €"
                                        value={filters.priceMax.value}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div id="chips" className="col s12">
                            <p>Catégories ^</p>
                            <div id="chipsInputs" className="col s12 m8 offset-m2">
                                <input
                                    type="text"
                                    name="categoryInput"
                                    id="categoryInput"
                                    value={filters.categoryInput.value}
                                    onChange={(e) => handleChange(e)}
                                    onKeyUp={() => searchCategories(filters.categoryInput.value)}
                                    placeholder="catégorie"
                                    className="col s12 m6 offset-m1"
                                />
                                <button
                                    id="addCategory-btn"
                                    onClick={() => console.log("lol")}
                                    className="col s12 m2 offset-m1"
                                > Ajouter </button>
                            </div>

                            <div className="categoriesSuggestion">
                            </div>
                        </div>
                    </div>


                    <p>Filtres avancés ^</p>
                    <div id="advancedFilters" className="col s12">
                        <div id="advancedTag" className="col s3 offset-s1">

                        </div>

                        <div id="advancedInputs" className="col s7 m6 l5">

                        </div>
                    </div>

                    <div id="buttonsForm" className="col s12">
                        <button type="reset" className="col s5 m4 offset-m1">Tout effacer</button>
                        <button type="submit" className="col s5 offset-s2 m4 offset-m2">Valider</button>
                    </div>
                </form>
            </div>
            <div className="container right" id="resultDiv">
            </div>
        </div>
    );
}