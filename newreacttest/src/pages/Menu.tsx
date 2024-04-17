import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MessengerService from "./MessengerService";
import Test from "./Test";

const Menu = () => {
	return (
		<BrowserRouter>
			<div className="menu">
				<Link to="/Test">Home</Link>
				<a>About</a>
				<Link to="/MessengerService">Messenger service</Link>
				<a>Gallery</a>
				<a>Contact</a>
			</div>
			<Routes>
				<Route path="/Test" element={<Test />} />
				<Route path="/MessengerService" element={<MessengerService />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Menu;
