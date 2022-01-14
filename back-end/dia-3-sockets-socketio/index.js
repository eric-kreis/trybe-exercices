const cors = require('cors');
const express = require('express');
const path = require('path');
const socketIo = require('socket.io');

const app = express();
const http = require('http').createServer(app)

const likeSocket = require('./sockets/like');
const starSocket = require('./sockets/star');

const io = socketIo(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET, POST'],
  },
});

app.use(cors());
app.use(express.static(path.resolve(__dirname, 'public')));

likeSocket(io);
starSocket(io);

http.listen(3000, () => {
  console.log(`Server is running on PORT ${3000}`);
});
