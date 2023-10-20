import logo from '../assets/iti_logo_blue_512.png';

export default function LoadingSpinner(){

    return (
        <div className='container'>
            <div className="row" id='preloader'>
                <h3 className='col s12 m5 offset-m4'>Chargement...</h3>
            </div>

            <div className="row">
                <img src={logo} alt="logo" className="loader col s4 offset-s5" />
            </div>
        </div>
    )
}