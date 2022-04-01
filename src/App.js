import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import PolicyAccess from "./components/support/PolicyAccess";
import PolicyTerm from "./components/support/PolicyTerm";
import PolicyBuy from "./components/support/PolicyBuy";
import PolicyTransaction from "./components/support/PolicyTransaction";
import SecurityPrivacy from "./components/support/SecurityPrivacy";
import Shipment from "./components/support/Shipment";
import ExchangeRefund from "./components/support/ExchangeRefund";
import Payment from "./components/support/Payment";
import Recruitment from "./components/support/Recruitment";
import Activities from "./components/support/Activities";
import Introduce from "./pages/Introduce";
import NotFound from "./pages/NotFound";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Video from "./pages/Video";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import { useSelector } from "react-redux";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import { useContext, useEffect } from "react";
import AuthContext from "./components/context/auth-context";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Configure Firebase.
const config = {
	apiKey: "AIzaSyCvXABvetnGl4rEfP3e9Ty-Ar8Heu5aVbo",
	authDomain: "project-ecommerce-dbd35.firebaseapp.com",
};
firebase.initializeApp(config);

const suportItems = [
	{
		id: 1,
		path: "/policy-access",
		name: "Quy định truy cập website",
		component: <PolicyAccess />,
	},
	{
		id: 2,
		path: "/policy-term",
		name: "Chính sách và quy định",
		component: <PolicyTerm />,
	},
	{
		id: 3,
		path: "/policy-buy",
		name: "Chính sách bán hàng",
		component: <PolicyBuy />,
	},
	{
		id: 4,
		path: "/policy-transaction",
		name: "Điều khoản giao dịch",
		component: <PolicyTransaction />,
	},
	{
		id: 5,
		path: "/security-privacy",
		name: "Bảo mật và quyền riêng tư",
		component: <SecurityPrivacy />,
	},
	{
		id: 6,
		path: "/shipment",
		name: "Giao hàng & Nhận hàng",
		component: <Shipment />,
	},
	{
		id: 7,
		path: "/exchange-refund",
		name: "Chính sách đổi trả – Hoàn Tiền",
		component: <ExchangeRefund />,
	},
	{
		id: 8,
		path: "/payment",
		name: "Thông tin thanh toán",
		component: <Payment />,
	},
	{
		id: 9,
		path: "/recruitment",
		name: "Tuyển dụng",
		component: <Recruitment />,
	},
	{
		id: 10,
		path: "/activities",
		name: "Hoạt động công ty",
		component: <Activities />,
	},
];

function App() {
	const item = useSelector((state) => state.item.item);

	const authCtx = useContext(AuthContext);

	// Listen to the Firebase Auth state and set the local state.
	useEffect(() => {
		const unregisterAuthObserver = firebase
			.auth()
			.onAuthStateChanged(async (user) => {
				if (!user) {
					console.log("User is not logged in");
					return;
				}
				// console.log("Logged in user: ", user);
				const token = await user.getIdToken();
				authCtx.login(token ?? user.oauthAccessToken);
			});
		return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
	}, [authCtx]);

	return (
		<>
			{/* 1 cai ko fixed con 1 cai fixed roi fade down xuong, fixed hay ko truyen tu props vao */}
			<Nav />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/introduce">
					<Introduce />
				</Route>
				<Route path="/services" exact>
					<NotFound />
				</Route>
				<Route path="/services/:serviceId">
					<Service />
				</Route>
				<Route path="/products" exact>
					<NotFound />
				</Route>
				<Route path="/products/:productid" exact>
					<Products />
				</Route>
				<Route path="/products/:productid/:id" exact>
					<ProductDetail item={item} />
				</Route>
				<Route path="/videos">
					<Video />
				</Route>
				<Route path="/news">
					<Home />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/projects" exact>
					<Home />
				</Route>
				<Route path="/cart">
					<Cart />
				</Route>
				<Route path="/checkout">
					<Checkout />
				</Route>
				{!authCtx.isLoggedIn && (
					<Route path="/auth">
						<Auth />
					</Route>
				)}
				{suportItems.map((item, index) => (
					<Route key={index} path={item.path}>
						{item.component}
					</Route>
				))}
				<Route path="*" exact>
					<NotFound />
				</Route>
			</Switch>
			<Footer suportItems={suportItems} />
		</>
	);
}

export default App;
