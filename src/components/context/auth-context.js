import React, { useState } from "react";

const AuthContext = React.createContext({
	token: "",
	isLoggedIn: false,
	isAdmin: false,
	admin: () => {},
	login: (token) => {},
	logout: () => {},
});

// const calculateRemainingTime = (expirationTime) => {
// 	const currentTime = new Date().getTime();
// 	const adjustedExprirationTime = new Date(expirationTime).getTime();

// 	const remainingDuration = adjustedExprirationTime - currentTime;

// 	return remainingDuration;
// };

export const AuthContextProvider = (props) => {
	const initialToken = localStorage.getItem("token");
	const [token, setToken] = useState(initialToken);
	const [userIsAdmin, setUserIsAdmin] = useState(false);

	const userIsLoggedIn = !!token;

	const logoutHandler = () => {
		setToken(null);
		setUserIsAdmin(false);
		localStorage.removeItem("token");
	};

	const loginHandler = (token) => {
		setToken(token);
		localStorage.setItem("token", token);

		// const remainingTime = calculateRemainingTime(expirationTime);

		// logoutTimer = setTimeout(logoutHandler, remainingTime);
	};

	const admin = (email) => {
		const str = email.substring(0, 5);
		if (str === "admin") setUserIsAdmin(true);
	};

	const contextValue = {
		token: token,
		isLoggedIn: userIsLoggedIn,
		isAdmin: userIsAdmin,
		login: loginHandler,
		admin,
		logout: logoutHandler,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
