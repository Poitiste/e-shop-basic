import React, { FunctionComponent, useState } from "react";
import Product from "../models/product";
import './ProductCard.css'
import { Link } from "react-router-dom";

type Props = {
    product: Product,
    borderColor?: string
}

const ProductCard: FunctionComponent<Props> = ({ product, borderColor = '#0288d1' }) => {
    const [color, setColor] = useState<string>();

    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor('#f5f5f5');
    }

    return (
        <div className="col s12 m6 l4 xl3" onMouseEnter={showBorder} onMouseLeave={hideBorder}>
            <Link to={`shop/detail/${product.id}`}>
                <div className="card border" style={{borderColor: color}}>
                    <img key={product.id} src={product.picture} alt={product.name} />
                </div>
            </Link>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{product.name}</p>
                        <span>{product.price}€</span>
                    </div>
                </div>
        </div>
    );
};

export default ProductCard;