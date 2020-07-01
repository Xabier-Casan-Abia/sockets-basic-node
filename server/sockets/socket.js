const { io } = require("../server");

io.on('connection', (client) => {
    console.log('User connected ');

    client.emit('sendMessage', {
        user: 'Admin',
        message: 'Welcome!'
    });

    client.on('disconnect', () => {

        console.log('User conexion lost');
    });

    //Listen to client
    client.on('sendMessage', (data, callback) => {
        console.log(data);

        // Send information to all users
        client.broadcast.emit("sendMessage", data)

    });

})