import { useState } from "react";

const Test = () => {

	let [count, setCount] = useState(0);

	const updateCounter = () => {
		setCount(count + 1);
	};

	return (
		
		<div>
			<div className="counterButton">
				<button onClick={() => updateCounter()}>Update Number!</button>
				<p>{count}</p>
			</div>
			<h1>This is React WebApp </h1>
			<div className="test">
				<p> another piece of content</p>
				<p> another piece of content</p>
				<p> another piece of content</p>
				<p> another piece of content</p>
				<p> another piece of content</p>
				<p> another piece of content</p>
				<p> another piece of content</p>
				<p> another piece of content</p>
				<p> another piece of content</p>
			</div>
		</div>
	);
};

export default Test;
