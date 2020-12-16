
var socket = io();
socket.on('connect', function(){
    console.log('conectado al server')
});

socket.on('disconnect', function(){
    console.log('Perdimos conexión con el server')
});

// Enviar información emit

socket.emit('EnviarMensaje', {
    usuario: 'Manuel',
    mensaje: 'Hola Mundo'
}, function(mensaje){
    console.log('Mensaje del server', mensaje)
});

// Escuchar Información
socket.on('EnviarMensaje', function(mensaje){
    console.log('Servidor', mensaje)

 
});
