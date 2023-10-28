import { useEffect, useRef, useContext } from "react";
import { redirect } from "react-router-dom";
import UserContext from '../UserContext';
import { CartContext } from "../CartContext";
import "./ShoppingCart.css"

export default function ShoppingCart() {
    //to keep the user connected
    const { currentUser } = useContext(UserContext);
    let userDatas = useRef(null);

    //to get the shopping cart context
    const cart = useContext(CartContext);

    useEffect(() => {
        if ((currentUser !== 'not connected') && (currentUser !== undefined)) {
            userDatas.current = (JSON.parse(currentUser));
        }
        else {
            redirect("/");
        }
    }, [currentUser])

    return (
        <>
            <h1 className="center">Panier</h1>
            <div className="container">
                <div className="row">
                    {cart.items.length ? (
                        <form>
                            {cart.items.map(item => {
                                return (
                                    <div key={item.name} className="card col s12">
                                        <div className="left col s12 m6">
                                            <div className="card-image">
                                                <img src={item.picture} alt={item.name} />
                                            </div>
                                        </div>

                                        <div className="right col s12 m6 btns-item">
                                            <div className="hide-on-small">
                                                <div className="row"></div>
                                            </div>

                                            <div className="card-stacked">

                                                <div className="col offset-s3">
                                                    <div className="card-content">
                                                        <p>{item.name}</p>
                                                    </div>
                                                </div>

                                                <div className="col offset-s3 quantity-modifier">
                                                    <button
                                                        onClick={(e) => cart.removeOneFromCart(item.id)}
                                                        className="bg-red set-btn-cart">
                                                        <i className="material-icons">remove</i>
                                                    </button>

                                                    <div name={'valueOf' + item.name} className="quantity-value">{item.quantity}</div>

                                                    <button onClick={() => cart.addOneToCart(item)}
                                                        className="bg-green set-btn-cart">
                                                        <i className="material-icons">add</i>
                                                    </button>
                                                </div>

                                                <div className="row">
                                                    <div className="col s4 offset-s4">
                                                        <p>Total : {Math.round((item.price * item.quantity) * 100) / 100}€</p>
                                                    </div>
                                                    <button
                                                        className="col s2 offset-s4 bg-none"
                                                        onClick={(e) => cart.deleteFromCart(item.id)}>
                                                        Retirer du panier
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="row">
                                <p>Total panier : <cart.getTotalCost/>€</p>
                                
                                <button type="submit" className="bg-blue col s2 offset-s5">
                                    Valider le panier
                                </button>
                            </div>
                        </form>
                    ) : (<div className="row">
                            <div className="col s12">
                                <h4 className="center">Votre panier est vide</h4>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
}