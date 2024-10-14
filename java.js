function buscarEnPagina() {
    // Obtener el valor de la barra de búsqueda
    let input = document.getElementById('search-bar').value.toLowerCase();

    // Obtener todos los elementos de la página donde se desea buscar
    let contenido = document.querySelectorAll('section, article, p, h1, h2, h3');
    
    contenido.forEach(function(elemento) {
        if (elemento.textContent.toLowerCase().includes(input)) {
            elemento.style.display = '';
        } else {
            elemento.style.display = 'none';
        }
    });
}
