$( document ).ready(function() {
    console.log("ready!");
    $('#alerta').hide();
    $('#respuesta').hide();

    $('#enviar').click(function (e) {
        e.preventDefault();
        console.log("click");
        var email = $('#text_email').val();
        var nombre = $('#text_nombre').val();
        var mensaje = $('#text_mensaje').val();
        if (email == '' || nombre == '' || mensaje == '') {
           console.log("error");
              $('#alerta').show();
        } else {
            $.ajax({
                url: 'mailer.php',
                type: 'POST',
                data: {
                    email: email,
                    nombre: nombre,
                    mensaje: mensaje,
                    subject: 'Contacto desde la web'
                },
                success: function (data) {
                    console.log(data);
                    $('#respuesta').show();
                    $('#respuesta').text('Mensaje enviado correctamente!');
                    $('#text_email').val('');
                    $('#text_nombre').val('');
                    $('#text_mensaje').val('');
                },
                error: function (data) {
                    console.log(data);
                    $('#respuesta').show();
                    $('#respuesta').text('Error al enviar el mensaje!');
                }
            });
        }
    });

    $('#ok').click(function (e) {
        e.preventDefault();
        $('#alerta').fadeOut('slow');
    })

    $('.close_creditos').click(function (e) {
        e.preventDefault();
        $("#div_creditos").fadeOut('slow');
    });

});
