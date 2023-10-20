import axios from "axios";
import { useEffect, useState } from "react";
import { peripherals } from "../../const/const";
import LoadingSpinner from "../LoadingSpinner";
import CardCategories from "../cardCategories/CardCategories";

export default function ShopPeripherals() {
    const [categoriesToShow, setCategoriesToShow] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3001/categories')
            .then(res => {
                let values;
                values = res.data.filter((element) => peripherals.includes(element.name))
                setCategoriesToShow(values);
                setIsLoading(false);
            })
    }, [])

    return (
        <>
            <h2 id='titlePage'>Périphériques</h2>
            <div className="container">
                <div className="row">
                    {isLoading ? <LoadingSpinner /> : categoriesToShow.map(category => <CardCategories category={category} key={category.name} />)}
                </div>
            </div>
        </>
    )
}