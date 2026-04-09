let bugsDestruidos = 0;

function destruirBug() {

    bugsDestruidos++;

    document.getElementById("contador").textContent =
        "Bugs destruídos: " + bugsDestruidos;

    mostrarMensagem();

}

function mostrarMensagem() {

    let mensagem = document.getElementById("mensagem");

    if (bugsDestruidos === 0) {
        mensagem.textContent =
            "Bem vindo! Clique no botão para começar a destruir!";
    }
    if (bugsDestruidos === 5) {
        mensagem.textContent =
            "🔥 Você está pegando o jeito!";
    }

    else if (bugsDestruidos === 10) {
        mensagem.textContent =
            "⚡ Nível Júnior alcançado!";
    }

    else if (bugsDestruidos === 20) {
        mensagem.textContent =
            "🚀 Nível Pleno desbloqueado!";
    }

    else if (bugsDestruidos === 30) {
        mensagem.textContent =
            "🏆 Nível Sênior atingido!";
    }

}