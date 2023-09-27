import './NavigationBar.css';
import logo from '../../assets/logo_iti_50_pourcent.png';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import { Link, useNavigate } from "react-router-dom";
import { useContext,useEffect, useRef } from "react";
import UserContext from '../../_components/UserContext';
import toast from 'react-hot-toast';


export default function NavigationBar() {
    const {currentUser,setCurrentUser} = useContext(UserContext);
    const navigate = useNavigate();
    const sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
    let userDatas = useRef();

    useEffect(()=>{
        if( (currentUser !== 'not connected') && (currentUser !== undefined)){
            userDatas.current = (JSON.parse(currentUser));
        }
    },[currentUser])

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
                        <li>
                            <Link to={"/"}>
                                <img src={logo}
                                    alt="Logo page d'accueil"
                                    id='logo_company'
                                    className="tooltipped"
                                    data-position="bottom"
                                    data-tooltip="vers l'accueil"
                                />
                            </Link>
                        </li>
                        <li><Link to={'/'} >Accueil</Link></li>
                        <li><Link to={'shop'} category={"Boutique"}>Boutique</Link></li>
                        <li><Link to={'shop/promotions'} category={"Promotions"}>Promotions</Link></li>
                        <li><Link to={'shop/news'}>Nouveautés</Link></li>
                        <li><Link to={'services'}>Prestations</Link></li>
                    </ul>
                    <ul className="right hide-on-med-and-down">
                            {
                                (currentUser !== undefined) && (currentUser !== 'not connected') ?
                                <>
                                        <li><Link to={'checkout'}><i className="material-icons left">shopping_cart</i>Mon Panier</Link></li>
                                        <li><Link to={'account'}>Mon Compte</Link></li>
                                        <li><Link onClick={handleLogOut}>Me déconnecter</Link></li>
                                </>
                                : 
                                //<UserContext.Provider value={{currentUser,setCurrentUser}}>
                                    <li><Link to={'/connection'}>Connexion</Link></li>
                                //</UserContext.Provider>
                            }
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="slide-out">
                <li><Link to={'/'} >Accueil</Link></li>
                <li><Link to={'shop'} category={"Boutique"}>Boutique</Link></li>
                <li><Link to={'shop/promotions'} category={"Promotions"}>Promotions</Link></li>
                <li><Link to={'shop/news'}>Nouveautés</Link></li>
                <li><Link to={'services'}>Prestations</Link></li>

                <li><Link to={'checkout'}><i className="material-icons left">shopping_cart</i>Mon Panier</Link></li>

                <li><Link to={'account'}>Mon Compte</Link></li>
                <li><Link to={'/'}>Me déconnecter</Link></li>
                <li><Link to={'/connection'}>Connexion</Link></li>
            </ul>
        </div>
    );
}