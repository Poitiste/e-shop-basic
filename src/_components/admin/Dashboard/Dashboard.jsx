import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<>
			<h2 id='titlePage'>Tableau de bord</h2>

			<div className="container" id='dashboardContainer'>
				<div className="row">
					<Link to={`http://localhost:3000/admin/add-product`}>
						<div className="col s12 m5">
							<h4>Ajouter un produit</h4>
						</div>
					</Link>

					<div className="col s12 m5 offset-m1">
						<h4>Modifier un produit</h4>
					</div>
				</div>

				<div className="row">
					<div className="col s12 m5">
						<h4>Modifier les coordonnées d'un client</h4>
					</div>

					<div className="col s12 m5 offset-m1">
						<h4>Consulter une facture</h4>
					</div>
				</div>

				<div className="row">
					<Link to={`http://localhost:3000/admin/carousel`}>
						<div className="col s12 m5 offset-m4">
							<h4>Modifier le carousel</h4>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Dashboard;