import { FunctionComponent, useState, useEffect } from 'react';
import Carousel from '../_commons/Carousel/Carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css'
//import Product from '../models/product';
import ProductList from './ProductList';

const Home: FunctionComponent = () => {
    /*
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        
        //utiliser la méthode fetchProduct ou fetch(product) à développer
    }, [products]);
*/
    return (
        <>
            <Carousel />
            <h2 className='center'>Meilleures Ventes !</h2>
            <ProductList bestSeller={true} />
        </>
    )
}

export default Home;