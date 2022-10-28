
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.get('/chat1', (req, res) => {
  res.sendFile(__dirname + '/chat1.html');
});

app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/style.css');
});

io.on('connection', (socket) => {
  console.log('Welcome');
});

io.on('connection', (socket) => {
  console.log('Welcome');
  socket.on('disconnects', () => {
    console.log('Someone died');
  });
});

app.get('/favicon.ico', (req, res) => {
  res.sendFile(__dirname + '/favicon.ico');
});

const port = process.env.PORT || 3000;
app.get('/chatterbox.jpg', (req, res) => {
  res.sendFile(__dirname + '/chatterbox.jpg');
});

app.get('/customize.jpg', (req, res) => {
  res.sendFile(__dirname + '/customize.jpg');
});

app.get('/bg.jpg', (req, res) => {
  res.sendFile(__dirname + '/bg.jpg');
});

http.listen(port, () => {
  console.log('listening on *:3000');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: hello' + msg);
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: hello' + msg);
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    var memberCount = socket.length;
    console.log('Epic server members: ' + memberCount);
  });
});


io.on('connection', (socket) => {
  socket.broadcast.emit('hi');
});

io.on('connection', socket => {
  socket.join('some room');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

io.on("private", function(data) {       
  io.sockets.sockets[data.to].emit("private", { from: client.id, to: data.to, msg: data.msg });
  client.emit("private", { from: client.id, to: data.to, msg: data.msg });
});

