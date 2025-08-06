// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;
    if (amigoIngresado == '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(amigoIngresado);
        limpiarCaja();
        mostrarListaAmigos();
    }
    return;
}
function limpiarCaja(){
    document.getElementById('amigo').value = '';
    return;
}
function mostrarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let amigoMostrar = document.createElement('li');
        amigoMostrar.innerHTML = amigos[i];
        lista.appendChild(amigoMostrar);
    }
    return;
}
function sortearAmigo(){
    if (amigos.length == 0) {
        alert('No hay amigos existentes.')
    }else{
        let pos = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = document.getElementById('resultado');
        amigoSorteado.innerHTML = amigos[pos];
    }

}
