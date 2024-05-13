export async function fetchMessages() {
  try {
    let response = await fetch("http://localhost:5000/updateMessages");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    let result = await response.json();
    document.querySelector(".innerchatbox")?.replaceChildren();
    for (var k in result) {
      const el = document.createElement("p");
      console.log(result[k]);
      el.innerHTML = `${result[k].data.session_name}: ${result[k].data.text}`;
      if (result[k].session_id == sessionStorage.getItem("session_id")) {
        el.classList.add("outgoing");
      } else {
        el.classList.add("incoming");
      }

      document.querySelector(".innerchatbox")?.prepend(el);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function sendMessage(socket) {
  let text = document.getElementById("message").value;
  let session_id = sessionStorage.getItem("session_id");
  let session_name = sessionStorage.getItem("session_name");
  let data = {
    text,
    session_id,
    session_name,
  };
  let time = new Date(Date.now());
  socket.emit("message", data);
  let result = await fetch("http://localhost:5000/register", {
    method: "post",
    body: JSON.stringify({ time, session_id, data }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  result = await result.json();
}
