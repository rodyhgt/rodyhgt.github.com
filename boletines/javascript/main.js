// Obtenemos los elementos de la clase .close
let links = document.querySelectorAll(".close");

//Recorrerlos
links.forEach(function(link){
    // agregamos un evento click a cada uno de ellos
    link.addEventListener("click", function(evento){
        evento.preventDefault();

        // quitamos las clases de animacion que ya tiene
        
        // agregamos clases para animar su salida

    });
});

// Agregar un evento click a cada uno de ellos

