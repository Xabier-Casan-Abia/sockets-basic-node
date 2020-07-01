let socket = io();

// Listen
socket.on('connect', () => {
    console.log('Connectoed to server');
});

socket.on('disconnect', () => {
    console.log('Lost conexion with server');
});

// Send information
socket.emit('sendMessage', {
    user: 'Xabi',
    message: 'Hello World!'
}, (resp) => {
    console.log("resp: ", resp)
});

// Listen to information
socket.on('sendMessage', (message) => {
    console.log('Server:', message);
});