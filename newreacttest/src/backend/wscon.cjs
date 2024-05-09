const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const http = require("http");
const server = http.createServer(app);

const io = require("socket.io")(server, {
    cors: { 
        origin: "*"
    }
});

io.on("connection", (socket) => {
    console.log("user has connected");

    socket.on("message", (message) => {
        console.log(message);
        io.emit("message", `user said ${message}` );
    })
});

server.listen(8080, () => console.log("listening on http://localhost:8080") );