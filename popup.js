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



var btnAbrir = document.getElementById('btn-abrir'),
    stilo = document.getElementById('stilo'),
    popUp = document.getElementById('pop-up'),
    btnCerrar = document.getElementById('btn-cerrar');

btnAbrir.addEventListener('click', function() {
    stilo.classList.add('active');
    popUp.classList.add('active');
});

btnCerrar.addEventListener('click', function() {
    stilo.classList.remove('active');
    popUp.classList.remove('active');

});




var AbrirPopup = document.getElementById('abrir-popup'),
    effect = document.getElementById('effect'),
    popup1 = document.getElementById('popup1'),
    CerrarPopup = document.getElementById('cerrar-popup');

AbrirPopup.addEventListener('click', function() {
    effect.classList.add('active');
    popup1.classList.add('active');
});

CerrarPopup.addEventListener('click', function() {
    effect.classList.remove('active');
    popup1.classList.remove('active');

});


// con esto seleccionas varios elementos con la misma clase
var botones = document.querySelectorAll('.clasequequieras');
// con esto recorres los elementos que antes seleccionases
botones.forEach(function(boton) {
    // aqui dentro de la función del forEach, se va a llamar una vez por cada elemento que haya dentro de botones, y en cada ciclo, te va a poner en la variable boton cada elemento del array
    boton.addEventListener('click', function(e) {
        // aqui haces la función q se llamará al hacer click
    });
});