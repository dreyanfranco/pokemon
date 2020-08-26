let count = 1;
function render(){
    // guardo en la variable container el acceso al id de pokemon que esta dentro de div
let container = document.getElementById('pokemon');
// acceso a la variable para decirle de donde viene la imagen. Cambiando el numero escojo el pokemon.
container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`;

let prev = document.getElementById('prev');
let next = document.getElementById('next');

prev.onclick = function(){
    if (count > 1) {
        count = count - 1;
        render();
    }
    
}

next.onclick = function(){
    if (count < 650){
        count = count + 1;
        render();
    }
    
}
}
render();