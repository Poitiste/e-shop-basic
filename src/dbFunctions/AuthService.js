import api from './api';
import { hashPassword } from './password';
import toast from "react-hot-toast";

export const login = async (mail, password) => {
	const passwordHashed = hashPassword(password);

	const response = await api.get(`http://localhost:3001/users?mail=${mail}&password=${passwordHashed}`)

	const token = response.data[0];
	if (token) {
		localStorage.setItem('user', JSON.stringify(response.data[0]));
		toast.success(`Bienvenue ${token.firstname} ${token.lastname}`);
	}
	else{
		toast.error("Login ou mot de passe incorrect.");
	}

	return token;
};

export const isAuthenticated = () => {
	const user = localStorage.getItem('user');
	return user !== null ? JSON.parse(user) : '' ;
};