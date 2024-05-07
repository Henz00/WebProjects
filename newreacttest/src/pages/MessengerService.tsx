import { useState , useEffect } from "react";

const MessengerService = () => {
	const [title] = useState("RTW project group");

	useEffect(() => {
		const handleOnSubmit = async () => {
			let data = (document.getElementById("message") as HTMLInputElement).value;
			console.log(data);
			let result = await fetch(
			'http://localhost:5000/register', {
				method: "post",
				body: JSON.stringify({ data }),
				headers: {
					'Content-Type': 'application/json'
				}
			});
	
			result = await result.json();
		};
	
		let enterPressed = false;

		const handleKeyDown = (e:KeyboardEvent) => {
			if(e.key === "Enter" && !enterPressed) {
				enterPressed = true;
				const messageInput = (document.getElementById("message") as HTMLInputElement);
        		if (messageInput && messageInput.value.trim() !== "") {
          			handleOnSubmit();
          			e.preventDefault();
					messageInput.value = "";
        		}
			}
		};

		const handleKeyUp = (e:KeyboardEvent) => {
			if (e.key === "Enter") {
			  enterPressed = false;
			}
		  };

		const messageInput = document.getElementById("message");
    	messageInput?.addEventListener("keydown", handleKeyDown);
    	messageInput?.addEventListener("keyup", handleKeyUp);

		return () => {
			messageInput?.removeEventListener("keydown", handleKeyDown);
			messageInput?.removeEventListener("keyup", handleKeyUp);
		  };

	}, []);

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
				<input 
					type="text"
					placeholder="Aa..."
					id="message"
					className="message"
					role="textbox"
					contentEditable="true"
					aria-placeholder="Send a message"
					aria-multiline="true"
					spellCheck="true"
					tabIndex={0}
					suppressContentEditableWarning={true} />
				<div
					id="sendMessageButton"
				>
					Button
				</div>
			</div>
		</div>
	);
};

export default MessengerService;
