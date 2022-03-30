const http = require("http");
const express = require('express');
const PORT = 5500;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const server = http.createServer(app);

app.get('/', (req, res) => res.render('index'));
app.get('/signup', (req, res) => res.render('index'));
app.get('/login', (req, res) => res.render('index'));
app.get('/logout', (req, res) => res.render('index'));
app.get('/profile', (req, res) => res.render('index'));

server.listen(PORT, () => console.log(`Server running on port ${PORT}.`));