'use strict'

const block    = document.querySelectorAll('.block')
const h2        = document.querySelectorAll('.h2')
    

// Cuando CLICK en h2,
    // QUITAR la clase activo de TODOS los bloque
    // Vamos a añadir la clase activo al BLOQUE con la POSICION del h2

// Recorrer TODOS los h2
h2.forEach( ( cadaH2 , i )=>{
    // Asignando un CLICK a cada h2
    h2[i].addEventListener('click', ()=>{

        // Recorrer TODOS los bloque
        block.forEach( ( cadaBloque , i )=>{
            // Quitamos la clase activo de TODOS los bloques
            block[i].classList.remove('active')
        })
        // Añadiendo la clase activo al bloque cuya posición sea igual al del h2
        // (Línea número 12)
        block[i].classList.add('active')

    })
})

function mybutton(){
    window.location.href = "../inicio/inicio.html"
}