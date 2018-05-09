const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected!');



  socket.on('createMessage', (message) => {
    console.log('createMessage', message);

    //socket.emit from admin
    //socket.broadcast.emit from admin new user joined

    io.emit('newMessage', {
      from: message.from,
      message: message.text,
      createdAt: new Date().getTime()
    });

    socket.emit('newMessage', {
      from: 'Admin',
      text: 'Welcome to the chat app',
      createdAt: new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
      from: 'Admin',
      text: 'New user joined',
      createdAt: new Date().getTime()
    })
    /*
   socket.broadcast.emit('newMessage', {
    from: message.from,
    message: message.text,
    createdAt: new Date().getTime()
   });
   */
  });

  socket.on('disconnect', () => {
    console.log('Disconnecting from client.');
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
