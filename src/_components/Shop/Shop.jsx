import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import Card from "../card/Card";
import ProductService from "../../dbFunctions/ProductService";
import LoadingSpinner from "../LoadingSpinner";


export default function Shop() {
    const params = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        if (params.category?.length !== undefined) {
            if (params.category !== "composants" || params.category !== "peripheriques") {
                let productsPromise = ProductService.getProductsByCategory(params.category);
                if (productsPromise !== undefined) {
                    productsPromise.then((value) => {
                        if (value !== undefined && value.length > 0) {
                            setProducts(value);
                            setIsLoading(false);
                        }
                    })
                }
            }
        }
    }, [params.category])

    return (
        <>
        <h2 id='titlePage'>{params.category}</h2>
        <div className="container">
            <div className="row">
                {isLoading ? <LoadingSpinner/> : products.map(product => <Card product={product} key={product.name} />)}
            </div>
        </div>
        </>
    )
}