$( document ).ready(function() {
    console.log("ready!");
    $('#alerta').hide();

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
                    mensaje: mensaje
                },
                success: function (data) {
                    alert(data);
                }
            });
        }
    });

    $('#ok').click(function (e) {
        e.preventDefault();
        $('#alerta').slideDown();
    })

});
