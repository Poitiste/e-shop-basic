import './NavigationBar.css';
import logo from '../../assets/iti_logo_white_512.png';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import UserContext from '../../_components/UserContext';
import toast from 'react-hot-toast';
import QuickSearch from '../Search/QuickSearch';
import SearchBarResults from '../Search/SearchBarResults';


export default function NavigationBar() {
    const navigate = useNavigate();

    //to keep the user connected
    const { currentUser, setCurrentUser } = useContext(UserContext);
    let userDatas = useRef();

    //for materialize CSS
    const sidenav = document.querySelector('#slide-out');
    const dropdown = document.querySelector('.dropdown-trigger');
    M.Sidenav.init(sidenav, {});
    M.Dropdown.init(dropdown, { constrainWidth: false })

    //for the searchBar
    const [input, setInput] = useState();
    const [results, setResults] = useState([]);

    useEffect(() => {
        if ((currentUser !== 'not connected') && (currentUser !== undefined)) {
            userDatas.current = (JSON.parse(currentUser));
        }
    }, [currentUser])

    const handleLogOut = () => {
        localStorage.removeItem('user');
        setCurrentUser('not connected');
        toast(`À bientôt ${userDatas.current.firstname} ${userDatas.current.lastname}`)
        navigate('/');
    };

    return (
        <div>
            <nav>
                <div className="nav-wrapper light-blue darken-2">
                    <Link to="/" data-target="slide-out" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </Link>
                    <ul className="left hide-on-med-and-down">
                        <li><img src={logo} alt="page d'accueil" id='logo_company' /></li>
                        <li>iTi-informatique</li>
                        <li><Link to={'/'} >Accueil</Link></li>
                        <li>
                            <Link to={'shop'}>
                                <i id='arrow_drop_down' className='material-icons right dropdown-trigger' data-target="dropdown-shop">
                                    arrow_drop_down
                                </i>
                                Boutique
                            </Link>
                        </li>
                        <li><Link to={'shop/promotions'} category={"Promotions"}>Promotions</Link></li>
                        <li><Link to={'shop/news'}>Nouveautés</Link></li>
                        <li><Link to={'services'}>Prestations</Link></li>
                    </ul>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <QuickSearch input={input} setInput={setInput} setResults={setResults} />
                            <SearchBarResults results={results} setResults={setResults} setInput={setInput} />
                        </li>

                        {
                            (currentUser !== undefined) && (currentUser !== 'not connected') ?
                                <>
                                    <li><Link to={'checkout'}><i className="material-icons left">shopping_cart</i>Mon Panier</Link></li>
                                    <li><Link to={'account'}>Mon Compte</Link></li>
                                    <li><Link onClick={handleLogOut}>Me déconnecter</Link></li>
                                </>
                                :
                                <li><Link to={'/connection'}>Connexion</Link></li>
                        }
                    </ul>
                </div>
            </nav>

            <div id="dropdown-shop" className='dropdown-content container'>
                <div className="row">

                    <div className="col m3">
                        <Link to="http://localhost:3000/shop/mobile" className='drop-category'>Mobile</Link>
                        <div className="col m12 drop-subcategory">
                            <Link to="http://localhost:3000/shop/smartphone">Smartphone</Link>
                            <Link to="http://localhost:3000/shop/tablette">Tablette</Link>
                        </div>
                    </div>

                    <div className="col m3">
                        <Link to="http://localhost:3000/shop/pc" className='drop-category'>PC</Link>
                        <div className="col m12 drop-subcategory">
                            <Link to="http://localhost:3000/shop/pc_fixe" >PC Fixe</Link>
                            <Link to="http://localhost:3000/shop/pc_portable">PC Portable</Link>
                        </div>
                    </div>

                    <div className="col m3">
                        <Link to="http://localhost:3000/shop/mobilier" className='drop-category'>Mobilier Gaming</Link>
                        <div className="col m12 drop-subcategory">
                            <Link to="http://localhost:3000/shop/siege">Siège</Link>
                            <Link to="http://localhost:3000/shop/bureau">Bureau</Link>
                        </div>
                    </div>

                    <div className="col m3">
                        <Link to="http://localhost:3000/shop/jeux_et_loisirs" className='drop-category'>Jeux Et Loisirs</Link>
                        <div className="col m12 drop-subcategory">
                            <Link to="http://localhost:3000/shop/console">Consoles</Link>
                            <Link to="http://localhost:3000/shop/jeux_video">Jeux Vidéo</Link>
                        </div>
                    </div>

                    <div className="col m3">
                        <Link to="http://localhost:3000/shop/peripheriques" className='drop-category'>Périphérique PC</Link>

                        <div className="col m12 drop-subcategory">
                            <Link to="http://localhost:3000/shop/ecran">Écran</Link>
                            <Link to="http://localhost:3000/shop/clavier">Clavier</Link>
                            <Link to="http://localhost:3000/shop/souris">Souris</Link>
                            <Link to="http://localhost:3000/shop/casque">Casque</Link>
                            <Link to="http://localhost:3000/shop/webcam">Webcam</Link>
                            <Link to="http://localhost:3000/shop/microphone">Microphone</Link>
                            <Link to="http://localhost:3000/shop/manette">Manette</Link>
                            <Link to="http://localhost:3000/shop/tapis_de_souris">Tapis De Souris</Link>
                            <Link to="http://localhost:3000/shop/pack_clavier_souris">Pack Clavier Souris</Link>

                        </div>
                    </div>

                    <div className='col m3'>
                        <div className='drop-category'>
                            <Link to="http://localhost:3000/shop/composants" className='drop-category'>Composant PC</Link>
                        </div>

                        <div className="col m12 drop-subcategory">
                            <Link to="http://localhost:3000/shop/stockage">Stockage</Link>
                            <Link to="http://localhost:3000/shop/processeur">Processeur</Link>
                            <Link to="http://localhost:3000/shop/carte_mere">Carte Mère</Link>
                            <Link to="http://localhost:3000/shop/memoire_ram">Mémoire RAM</Link>
                            <Link to="http://localhost:3000/shop/alimentation">Alimentation</Link>
                            <Link to="http://localhost:3000/shop/boitier">Boîtier</Link>
                            <Link to="http://localhost:3000/shop/carte_graphique">Carte graphique</Link>
                            <Link to="http://localhost:3000/shop/refroidissement">Refroidisseur</Link>
                        </div>
                    </div>

                    <div className="col m3">
                        <Link to="http://localhost:3000/shop/accessoire" className='drop-category'>Accessoire</Link>
                        <div className="col m12 drop-subcategory">
                            <Link to="http://localhost:3000/shop/accessoire/mobile/">Mobile</Link>
                            <Link to="http://localhost:3000/shop/accessoire/console">Console</Link>
                            <Link to="http://localhost:3000/shop/accessoire/pc_portable">PC Portable</Link>
                            <Link to="http://localhost:3000/shop/accessoire/voiture">Voiture</Link>
                        </div>
                    </div>

                    <div className="col m3">
                        <Link to="http://localhost:3000/shop/connectique" className='drop-category'>Connectique</Link>
                        <div className="col m12 drop-subcategory">
                            <Link to="http://localhost:3000/shop/connectique_usb">USB</Link>
                            <Link to="http://localhost:3000/shop/connectique_video">Vidéo</Link>
                            <Link to="http://localhost:3000/shop/connectique_reseau">Réseau</Link>
                            <Link to="http://localhost:3000/shop/connectique_hifi">Hifi</Link>
                        </div>
                    </div>

                </div>
            </div>

            <ul className="sidenav" id="slide-out">
                <li><div className='divider'></div></li>
                <li><Link to={'/'} >Accueil</Link></li>
                <li><Link to={'shop'} category={"Boutique"}>Boutique</Link></li>
                <li><Link to={'shop/promotions'} category={"Promotions"}>Promotions</Link></li>
                <li><Link to={'shop/news'}>Nouveautés</Link></li>
                <li><Link to={'services'}>Prestations</Link></li>
                <li><Link to={'checkout'}><i className="material-icons left">shopping_cart</i>Mon Panier</Link></li>

                {
                    (currentUser !== undefined) && (currentUser !== 'not connected') ?
                        <>
                            <li><Link to={'checkout'}><i className="material-icons left">shopping_cart</i>Mon Panier</Link></li>
                            <li><Link to={'account'}>Mon Compte</Link></li>
                            <li><Link onClick={handleLogOut}>Me déconnecter</Link></li>
                        </>
                        :
                        <li><Link to={'/connection'}>Connexion</Link></li>
                }
            </ul>
        </div >
    );
}