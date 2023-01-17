const http = require("http");
const express = require('express');
const socketio = require('socket.io');
const PORT = 5600 || process.env.PORT;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        allowEIO3: true
    }
});

io.on('connection', (socket) => {
    socket.on("message", (data) => {
        console.log(data);
        socket.broadcast.emit("message", data);
    });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}.`));