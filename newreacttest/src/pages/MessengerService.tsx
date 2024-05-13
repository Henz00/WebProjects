import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { fetchMessages , sendMessage } from "../backend/messageService.cjs";

const MessengerService = () => {
	const [title] = useState("RTW project group");
	const socket = io("ws://localhost:8080");

	if(sessionStorage.getItem("session_id") == null){
		let name = prompt("Please enter a username");
		sessionStorage.setItem("session_name", (name as string));
		socket.on("connect", () => {
			sessionStorage.setItem("session_id", (socket.id as string));
		  });
		};

		let exist = socket.hasListeners("message");
		if(!exist) {
			socket.on("message", (data) => {
				const el = document.createElement("div");
				if(data.session_id == sessionStorage.getItem("session_id")){
					el.innerHTML = `${data.session_name}: ${data.text}`;
					el.classList.add("outgoing");
					document.querySelector(".innerchatbox")?.prepend(el);
				} else {
					el.innerHTML = `${data.session_name}: ${data.text}`;
					el.classList.add("incoming");
					document.querySelector(".innerchatbox")?.prepend(el);
				}
				
			  });
		}

		
	
	useEffect(() => {
		fetchMessages();
	  }, []);

	  
	useEffect(() => {
		let enterPressed = false;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Enter" && !enterPressed) {
				enterPressed = true;
				const messageInput = document.getElementById(
					"message"
				) as HTMLInputElement;
				if (messageInput && messageInput.value.trim() !== "") {
					sendMessage(socket);
					e.preventDefault();
					messageInput.value = "";
				}
			}
		};

		const handleKeyUp = (e: KeyboardEvent) => {
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
			</div>
			<div className="messagebox">
				<img src="/src/assets/barrel.png" alt="first image"></img>
				<input
					type="text"
					placeholder="Aa..."
					id="message"
					className="inputMessage"
					role="textbox"
					contentEditable="true"
					aria-placeholder="Send a message"
					aria-multiline="true"
					spellCheck="true"
					tabIndex={0}
					suppressContentEditableWarning={true}
				/>
				<div id="sendMessageButton">Button</div>
			</div>
		</div>
	);
};

export default MessengerService;