$('#btn-publicar').click(function(){
    var lista = $('#lista-comentarios');
    var texto = $('#texto-caja').val();
    if(texto.length < 1) {
        return
    }else {
        nombre = $('#usuarioNombre').val();



        var nuevoComentario = '<li><div class="comentario">' +
        '<img src="' + fotoURL + '" alt="">' +
        '<strong>' + nombre + '</strong>' +
        '<p>' + texto + '</p>' +
        '</div></li>';
        lista.append(nuevoComentario);
        $('#texto-caja').val('');
        
    }
})


let fotoInput = $('#foto'); 
let nombre;
let contrasena;
let fotoURL = 'assets/imgs/walter.jpeg'; 

$('#btn-login').click(function(){
    nombre = $('#usuarioNombre').val();
    contrasena = $('#contrasena').val();

    if (nombre.length > 0 && contrasena.length > 0) {
        var PopUpelementos = $('#popupID')
        PopUpelementos.addClass("no-se-muestra")  
        $('#desaparece').toggleClass('no-se-muestra')  
        $('.no-se-muestra').siblings('#desaparece').toggleClass('no-se-muestra');

        $('strong[id="Cambiar-Nombre"]').each(function() {
            $(this).html(nombre);
          });
          
        $('#Cambiar-Nombre').html(nombre)

        if (fotoInput[0].files && fotoInput[0].files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                fotoURL = e.target.result;
                    $('img[id="usuario-img"]').each(function() {
                    $(this).attr('src', fotoURL);
                  });
                console.log('Imagen cargada correctamente');
            };
            
            reader.readAsDataURL(fotoInput[0].files[0]);
        }
    } else {
        alert('Por favor, completa todos los campos.');
        return;
    }
});
    



$('#expandir').click(function(){
    $(this).addClass('no-se-muestra');

    $('.sugeridos').each(function() {
        $(this)
          .removeClass('sugeridos')
          .addClass('se-muestra');
    });
})


$('.heart').click(function() {
    $(this).toggleClass('clicked');
});

$('.save-icon').click(function() {
    $(this).toggleClass('saved');
  });
  