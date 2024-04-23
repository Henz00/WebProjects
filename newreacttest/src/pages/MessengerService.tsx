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
				<img src="/src/assets/barrel.png" alt="first image"></img>
				<div
					className="message"
					role="textbox"
					contentEditable="true"
					aria-placeholder="Send a message"
					aria-multiline="true"
					spellCheck="true"
					tabIndex={0}
				>
					Aa
				</div>
			</div>
		</div>
	);
};

export default MessengerService;
