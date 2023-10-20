import { FunctionComponent, useEffect, useState } from 'react';
import Carousel from '../_commons/Carousel/Carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from 'axios';
import { categories } from '../const/const';
import CardCategories from './cardCategories/CardCategories';
import Product from '../classes/product';

const Home: FunctionComponent = () => {
    const [categoriesToShow, setCategoriesToShow] = useState<Product[]>([]);

    useEffect(()=>{
        axios.get('http://localhost:3001/categories')
            .then(res => {
                    setCategoriesToShow(res.data.filter((element: { name: string, picture: string }) => categories.includes(element.name)));
                }
            )
    },[])

    return (
        <>
            <Carousel />
            <div className="container">
                <div className="row">
                    {categoriesToShow.map(category => <CardCategories category={category} key={category.name} />)}
                </div>
            </div>
        </>
    )
}
export default Home;