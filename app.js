let listaDeAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo"); 
    const nome = input.value.trim();  
    if (nome === "") {  
        alert("Por favor, insira um nome válido!");
        return;
    }
    listaDeAmigos.push(nome);
    input.value = "";
    exibirLista();
}

function exibirLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";  

    listaDeAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = `${amigo}`; 
        ul.appendChild(li);
    });
}

function dispararConfetes() {
    confetti({
    particleCount: 1000,
    spread: 500,
    origin: { y: 0.6 },
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome.");
        return;
    }  
    const indexAleatorio = Math.floor(Math.random() * listaDeAmigos.length);   
    const amigoSorteado = listaDeAmigos[indexAleatorio];
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;

    dispararConfetes()
}

function resetarJogo() {
    alert("Jogo Reiniciado!");
    document.getElementById("listaAmigos").innerHTML = ""; 
    document.getElementById("resultado").innerHTML = ""; 
    listaDeAmigos = []; 
}
