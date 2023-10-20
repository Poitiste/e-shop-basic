import Carousel from "../../_commons/Carousel/Carousel";
import { useReducer } from 'react';
import './EditCarousel.css';

function EditCarousel() {

    function carouselReducer() {

    }

    const [carousel, setCarousel] = useReducer(carouselReducer, <Carousel />)

    return (
        <div className="container">
            <h2 id="titlePage">Édition du carousel</h2>
            <div className="row">

                <form className="col s12" id="formCarousel">
                    <div className="row">
                        <div className="switch col s4">
                            <p>Démarrage automatique</p>
                            <label htmlFor="autoPlay">
                                Off
                                <input type="checkbox" name="autoPlay" id="autoPlay" />
                                <span className="lever"></span>
                                On
                            </label>
                        </div>

                        <div className="switch col s4">
                            <p>Boucle infinie</p>
                            <label htmlFor="infiniteLoop">
                                Off
                                <input type="checkbox" name="infiniteLoop" id="infiniteLoop" />
                                <span className="lever"></span>
                                On
                            </label>
                        </div>

                        <div className="switch col s4">
                            <p>Arrêt au survol</p>
                            <label htmlFor="stopOnHover">
                                Off
                                <input type="checkbox" name="stopOnHover" id="stopOnHover" />
                                <span className="lever"></span>
                                On
                            </label>
                        </div>
                        <div className="col s6 offset-s3 center">
                            <button type="submit">Valider</button>
                        </div>
                    </div>

                </form>

                <div className="col s12">
                    <div className="row">
                        <div className="left col s12 m6">
                            <h5 className="center">Le carousel actuel</h5>
                            <Carousel/>
                        </div>

                        <div className="right col s12 m6">
                            <h5 className="center">Le carousel modifié</h5>
                            {carousel}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default EditCarousel;