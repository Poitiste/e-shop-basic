import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'
import { Link } from "react-router-dom";

export default () => (
    <Carousel autoPlay infiniteLoop stopOnHover showThumbs={false} showArrows={true} showIndicators={false}>
        <div>
            <Link to={'/shop/pokemon'}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
                alt="pokémon"
            />
            <p className="legend">Pokémon</p>
            </Link>
        </div>
        <div>
            <Link to={'/shop/goldorak'}>
            <img
                src="https://www.coindugeek.com/c/153-category_default/goldorak.jpg"
                alt="goldorak"
            />
            <p className="legend">Goldorak</p>
            </Link>
        </div>
        <div>
            <Link to={'/shop/yugioh'}>
            <img
                src="https://upload.wikimedia.org/wikipedia/fr/a/a5/Yu-Gi-Oh_Logo.JPG"
                alt="yu-gi-oh"
            />
            <p className="legend">Yu-Gi-Oh!</p>
            </Link>
        </div>
        <div>
            <Link to={'/shop/dragonball'}>
            <img
                src="https://upload.wikimedia.org/wikipedia/fr/f/f2/Dragon_Ball_Z_Logo.svg"
                alt="dragon ball z"
                
            />
            <p className="legend">Dragon Ball Z</p>
            </Link>
        </div>
    </Carousel>
);