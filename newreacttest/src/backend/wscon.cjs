const express = require('express');
const app = express();

const io = require('socket.io')(app, {
    cors: {origin: "*"}
});

io.on('connection', (socket) => {
    console.log("user has connected");

    socket.on('message', (message) => {
        console.log(message);
        io.emit('message', `${socket.id.substr(0,2)} said ${message}` );
    })
});

app.listen(8080, () => console.log("listening on http://localhost/8080") );
