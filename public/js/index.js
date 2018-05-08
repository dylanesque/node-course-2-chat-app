var socket = io();

socket.on('connect', () => {
  console.log("Connected to server");

  socket.emit('createMessage', {
    from: 'Mike',
    text: 'Yeah, it is a message'
  });
});

socket.on('disconnect', () => {
  console.log('Disconnecting from server.');
});

socket.on('newEmail', function(email) {
  console.log("New email was sent!");
});
