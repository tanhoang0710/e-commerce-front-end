import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { AuthContextProvider } from "./components/context/auth-context";

ReactDOM.render(
	<Provider store={store}>
		<AuthContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AuthContextProvider>
	</Provider>,
	document.getElementById("root")
);
