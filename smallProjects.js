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

app.get("/api", (_req, res) => {
    res.send("[104,116,116,112,115,58,47,47,119,119,119,46,121,111,117,116,117,98,101,46,99,111,109,47,119,97,116,99,104,63,118,61,100,81,119,52,119,57,87,103,88,99,81]");
});

io.on('connection', (socket) => {
    socket.on("message", (data) => {
        console.log(data);
        socket.broadcast.emit("message", data);
    });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}.`));