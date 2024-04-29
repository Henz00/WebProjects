import { useState } from "react";
import "./Reset.css";
import "./App.css";
import Header from "./pages/Header";
import Menu from "./pages/Menu";
import Footer from "./pages/Footer";

function App() {
	var [count, setCount] = useState(0);

	const updateCounter = () => {
		setCount(count + 1);
	};

	const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const handleOnSubmit = async (e:any) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ name, email }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setEmail("");
            setName("");
        }
	}

	return (
		<div className="body">
			<Header />
			<Menu />
			<main className="main">
				<div className="counterButton">
					<button onClick={() => updateCounter()}>Update Number!</button>
					<p>{count}</p>
				</div>
				<h1>This is React WebApp </h1>
            	<form action="">
                	<input type="text" placeholder="name"
                	value={name} onChange={(e) => setName(e.target.value)} />
                	<input type="email" placeholder="email"
                	value={email} onChange={(e) => setEmail(e.target.value)} />
                	<button type="submit"
                	onClick={handleOnSubmit}>submit</button>
            	</form>
			</main>
			<Footer />
		</div>
	);
}


export default App;
