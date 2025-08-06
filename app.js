// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function verificarAmigoIngresado(){
    let amigoIngresado = document.getElementById('amigo').value;
    if (amigoIngresado == '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(amigoIngresado);
        limpiarCaja();
        mostrarListaAmigos();
    }
}
function limpiarCaja(){
    document.getElementById('amigo').value = '';
}
function mostrarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML(`<li>${amigos[i]}</li>`);
    }
}
