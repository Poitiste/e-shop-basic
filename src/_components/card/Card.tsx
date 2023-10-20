import { FunctionComponent, useEffect, useState } from "react";
import Product from "../../classes/product";
import './Card.css'
import { Link } from "react-router-dom";

type Props = {
    product: Product,
    borderColor?: string
}

const Card: FunctionComponent<Props> = ({ product, borderColor = '#0288d1' }) => {
    const [color, setColor] = useState<string>("");
    const [chips, setChips] = useState<Array<any>>([]);

    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor('#f5f5f5');
    }

    const chipsProductCategories = () => {
        let copy = [];
        if(product.categories !== undefined){
            for (let i = 0; i < product.categories.length; i++) {
                if(product.categories[i].match(/^(.*)_(.*)/)){
                    let withouthUnderscore = product.categories[i].replaceAll("_"," ")
                    copy.push(
                        <span className='chip' key={product.name + ' ' + i}>{withouthUnderscore}</span>
                    );
                }
                else{
                    copy.push(
                        <span className='chip' key={product.name + ' ' + i}>{product.categories[i]}</span>
                    );
                }
                
            }
        }
        setChips(copy);
    }

    useEffect(() => {
        chipsProductCategories();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [])

    return (
        <div className="col s12 m6 l4" onMouseEnter={showBorder} onMouseLeave={hideBorder}>
            <Link to={`http://localhost:3000/shop/detail/${product.id}`}>
                <div className="card border" style={{ borderColor: color }}>
                    <img key={product.id} src={product.picture} alt={product.name} />
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>{product.name}</p>
                            <span className="price">{product.price}€</span>
                            <div className="divider"></div>
                            <div className="categories">
                                {chips}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div >
    );
};

export default Card;