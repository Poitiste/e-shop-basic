import axios from 'axios';
import { useEffect, useState } from "react";
import { categories } from "../../const/const";
import LoadingSpinner from "../LoadingSpinner";
import CardCategories from "../cardCategories/CardCategories";
import Product from "../../classes/product";

function ShopHome() {
    const [dataFetched, setDataFetched] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const home = dataFetched?.filter((element: { name: string, picture: string }) => categories.includes(element.name));

    useEffect(() => {
        axios.get('http://localhost:3001/categories')
            .then(res => {
                setDataFetched(res.data);
                setIsLoading(false);
            })
    }, [])

    return (
        <>
            <h2 id='titlePage'>Boutique</h2>
            <div className="container">
                <div className="row">
                    {isLoading ? <LoadingSpinner /> : home.map(category => <CardCategories category={category} key={category.name} />)}
                </div>
            </div>
        </>
    )
}

export default ShopHome;