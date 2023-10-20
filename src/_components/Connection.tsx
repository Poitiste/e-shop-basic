import { useState } from "react";
import { Link } from "react-router-dom";

function Connection() {
    const [registerBorderColor, setRegisterBorderColor] = useState<string>("#f5f5f5");
    const [loginBorderColor, setLoginBorderColor] = useState<string>("#f5f5f5");

    const showRegisterBorder = () => {
        setRegisterBorderColor("#02d188");
    }

    const hideRegisterBorder = () => {
        setRegisterBorderColor('#f5f5f5');
    }

    const showLoginBorder = () => {
        setLoginBorderColor("#0288d1");
    }

    const hideLoginBorder = () => {
        setLoginBorderColor('#f5f5f5');
    }

    return (
        <div className="container center">
            <h1>Connexion</h1>
            <div className="row">
                <div className="col s12 m8 offset-m2">
                        <div className="col s12 m6" onMouseEnter={showLoginBorder} onMouseLeave={hideLoginBorder}>
                            <div className="card border" style={{ fontWeight: 'bold', borderColor: loginBorderColor }}>
                                <div className="show-on-large hide-on-med-and-down" style={{ height: '400px', paddingTop: '50%', fontSize: '200%' }}>
                                    <Link to={'/login'}>Se connecter</Link>
                                </div>
                                <div className="show-on-medium-and-down hide-on-large-only" style={{ height: '50px', paddingTop: '15px' }}>
                                    <Link to={'/login'}>
                                        <i className="material-icons left">login</i>
                                        Se connecter
                                    </Link>
                                </div>
                            </div>
                        </div>

                    <div className="col s12 m6" onMouseEnter={showRegisterBorder} onMouseLeave={hideRegisterBorder}>
                        <div className="card border" style={{ borderColor: registerBorderColor, fontWeight: 'bold' }}>
                            <div className="show-on-large hide-on-med-and-down" style={{ height: '400px', paddingTop: '50%', fontSize: '200%' }}>
                                <Link to={'/register'}>Créer un compte</Link>
                            </div>
                            <div className="show-on-medium-and-down hide-on-large-only" style={{ height: '50px', paddingTop: '15px' }}>
                                <Link to={'/register'}>
                                    <i className="material-icons left">person_add</i>
                                    Créer un compte
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="divider"></div>
            <div style={{ fontWeight: 'bold' }}>
                <Link to={"/forgot-password"}>Mot de passe oublié ?</Link>
            </div>
        </div >
    );
}

export default Connection;