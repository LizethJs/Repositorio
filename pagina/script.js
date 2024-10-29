document.getElementById('menu-toggle').onclick = function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active'); // Alternar clase para abrir/cerrar menú
    
    // Animación del logo al hacer clic
    this.classList.toggle('open'); // Alternar clase para animar
};
