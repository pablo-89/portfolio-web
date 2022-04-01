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