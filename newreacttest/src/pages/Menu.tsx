import { Routes, Route, Link } from "react-router-dom";
import MessengerService from "./MessengerService";
import Test from "./Test";

const Menu = () => {
	return (
	<div className="test">
			<div className="menu">
				<Link to="/">Home</Link>
				<a>About</a>
				<Link to="/MessengerService">Messenger service</Link>
				<a>Gallery</a>
				<a>Contact</a>
			</div>
			<Routes>
				<Route path="/" element={<Test />} />
				<Route path="/MessengerService" element={<MessengerService />} />
			</Routes>
	</div>
	);
};

export default Menu;
