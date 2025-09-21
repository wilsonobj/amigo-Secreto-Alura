let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Adiciona o nome no array
    amigos.push(nome);

    // Atualiza a lista na tela
    atualizarLista();

    // Limpa o campo de texto
    input.value = "";
    input.focus();
}

// Atualiza a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpa antes de reescrever

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibir resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Amigo sorteado: <strong>${sorteado}</strong></li>`;
}