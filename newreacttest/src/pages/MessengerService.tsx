import { useState } from "react";

const MessengerService = () => {
	var [title] = useState("RTW project group");

	return (
		<div className="chatbox">
			<div className="chattitle">
				<h1>{title}</h1>
			</div>
			<div className="innerchatbox">
				<p className="incoming">Og det er han jo</p>
				<p className="outgoing">Meeeen det vidste vi jo godt</p>
			</div>
			<div className="messagebox">
				<img src="../assets/react.svg"></img>
				<p>Aa</p>
			</div>
		</div>
	);
};

export default MessengerService;
