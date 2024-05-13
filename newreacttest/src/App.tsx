import "./Reset.css";
import "./App.css";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import MessengerService from "./pages/MessengerService";
import Test from "./pages/Test";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";

function App() {

	return (
		<div className="body">
			<Header />
			<main className="main">
				<BrowserRouter>
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
				</BrowserRouter>
			</main>
			<Footer />
		</div>
	);
}

export default App;
