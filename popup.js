var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    efecto = document.getElementById('efecto'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function() {
    efecto.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function() {
    efecto.classList.remove('active');
    popup.classList.remove('active');

});




// con esto seleccionas varios elementos con la misma clase
var botones = document.querySelectorAll('.btn-abrir-popup');
// con esto recorres los elementos que antes seleccionases
btnAbrirPopup.forEach(function(boton) {
    // aqui dentro de la función del forEach, se va a llamar una vez por cada elemento que haya dentro de botones, y en cada ciclo, te va a poner en la variable boton cada elemento del array
    boton.addEventListener('click', function(e) {
        efecto.classList.add('active');
        popup.classList.add('active');
        // aqui haces la función q se llamará al hacer click
    });
});