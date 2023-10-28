import { useState, useEffect, createContext } from 'react';
import { isAuthenticated } from '../dbFunctions/AuthService'

import LoginForm from '../_commons/LoginForm';

const UserContext = createContext(
	{
		currentUser : 'not connected',
		setCurrentUser: (_) => {}
	}
);

export const UserConnectProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(undefined);

	useEffect(() => {
		setCurrentUser(checkLoggedIn());
	}, []);

	return (
		<UserContext.Provider value={[currentUser, setCurrentUser]}>
			{currentUser.value ? children : <LoginForm />}
		</UserContext.Provider>
	);
};

export const checkLoggedIn = async () => {
	let cuser = await isAuthenticated();
	if (cuser === null) cuser = 'not connected';
	return cuser;
};

export default UserContext;