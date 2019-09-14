var socket = io();
var label = $('small');

socket.on('connect', function() {
    console.log('Servidor conectado');
});

socket.on('disconnect', function() {
    console.log('Servidor DESCONECTADO!!');
});

var searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');

console.log(escritorio);
$('h1').text('Escritorio ' + escritorio);

$('button').click(function() {

    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {

        if (resp === 'No hay tickets') {
            alert(resp);
            label.text(resp);
            return;
        }

        label.text('ticket ' + resp.numero);
    });
});