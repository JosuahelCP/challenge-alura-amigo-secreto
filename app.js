// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];

function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value.trim();
    if(nombreAmigo === ""){
        alert("Por favor, inserte un nombre");
        return;
    }
    if(amigos.includes(nombreAmigo)){
        alert("El nombre ya se ha agregado");
        return;
    }
    amigos.push(nombreAmigo);
    document.getElementById("amigo").value = "";
    actualizarLista();
    console.log(amigos);
}

function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let amigo of amigos){
        let elemento = document.createElement('li');
        elemento.textContent = amigo;
        lista.appendChild(elemento);
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("La lista de amigos esta vacia");
        return;
    }
    let randomIndex =Math.floor(Math.random() * amigos.length);
  
    let amigoRandom = amigos.at(randomIndex);

    document.getElementById("resultado").textContent = amigoRandom;
    
}