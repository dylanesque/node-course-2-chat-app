var socket = io();

socket.on('connect', () => {
  console.log("Connected to server");


});

socket.on('disconnect', () => {
  console.log('Disconnecting from server.');
});

socket.on('newEmail', function(email) {
  console.log("New email was sent!");
});
