import NavigationBar from "../_commons/NavigationBar/NavigationBar";

const Layout = ({ children }) => {
	return (
		<>
			<NavigationBar />
			{ children }
		</>
	);
};

export default Layout;