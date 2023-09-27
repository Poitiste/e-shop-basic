import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage(){
    const theError = useRouteError();
    if(theError.statusText === "Not Found"){
        throw new Response("",{
            status: 404,
            statusText: "Élément non trouvé. Celui-ci est peut-être inexistant, déplacé, supprimé."
        });
    }
    return(
        <div id="error-page">
            <p>Une erreur innatendue est survenue.</p>
            <i>{ theError.statusText || theError.message }</i>
            <div>
                <Link to={'/'}>
                    <button>
                        Retour à l'accueil
                    </button>
                </Link>
            </div>
        </div>
    )
};