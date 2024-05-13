import { Routes, Route, Link } from "react-router-dom";
import MessengerService from "./MessengerService";
import Test from "./Test";
import About from "./About";

const Menu = () => {
	return (
	<div className="test">
			<div className="menu">
				<Link to="/">Home</Link>
				<Link to="/About">About</Link>
				<Link to="/MessengerService">Messenger service</Link>
				<a>Gallery</a>
				<a>Contact</a>
			</div>
			<Routes>
				<Route path="/" element={<Test />} />
				<Route path="/About" element={<About />} />
				<Route path="/MessengerService" element={<MessengerService />} />
			</Routes>
	</div>
	);
};

export default Menu;
