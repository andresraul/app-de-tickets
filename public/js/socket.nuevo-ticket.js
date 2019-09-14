var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Servidor conectado');
});

socket.on('disconnect', function() {
    console.log('Servidor DESCONECTADO');
});

socket.on('estadoActual', function(resp) {

    label.text(resp.actual)

});

$('button').on('click', function() {

    socket.emit('nuevoTicket', null, function(siguiente) {

        label.text(siguiente);
    });


});