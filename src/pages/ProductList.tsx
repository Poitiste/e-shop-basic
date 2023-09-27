import { FunctionComponent, useState, 
//    useEffect 
} from "react";
import Product from "../models/product";
import ProductCard from "../_components/ProductCard";

type Props = {
    bestSeller: boolean
}

const ProductList: FunctionComponent<Props> = ({ bestSeller = false }) => {
    const [products, setProducts] = useState<Product[]>([]);

    /*
    useEffect(() => {
        setProducts(PRODUCTS);
    }, [products]);
    */
   

    const best = products.filter(product =>
        product.bestSeller === true
    );

    return (
        <div>
            <div className="container">
                <div className='row offset-xl3'>
                    {
                        bestSeller ? (
                            best.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    );

};

export default ProductList;