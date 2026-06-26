// Verifica se o usuário está logado
function estaLogado() {
    return usuarioLogado !== "";
}

// Retorna o nome do usuário logado
function obterUsuario() {
    return usuarioLogado;
}

// Troca "Acessar" pelo nome do usuário no header
function atualizarHeaderLogin() {
    var textoLogin = document.querySelector(".login span");

    if (textoLogin && estaLogado()) 
        textoLogin.textContent = obterUsuario();
}

atualizarHeaderLogin();
atualizarLinks();
