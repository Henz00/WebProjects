import { useState } from "react";
import "./Reset.css";
import "./App.css";
import Header from "./Header";
import Menu from "./Menu";
import Test from "./Test";
import Footer from "./Footer";

function App() {
	var [count, setCount] = useState(0);

	const updateCounter = () => {
		setCount(count + 1);
	};

	return (
		<div className="body">
			<Header />
			<Menu />
			<main className="main">
				<Test />
				<div className="counterButton">
					<button onClick={() => updateCounter()}>Update Number!</button>
					<p>{count}</p>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default App;
