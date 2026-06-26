function fazerLogin() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    // Mock de login (sem banco de dados)
    if (usuario === "tavares" && senha === "123") {
        usuarioLogado = usuario;
        window.location.href = montarUrl("index.html");

        return;
    } 

    alert("Usuário ou senha incorretos!");
}

function fazerLogout() {
    limparDados();
    window.location.href = "login.html";
}

function verificarTelaLogin() {
    var areaLogin = document.getElementById("area-login");
    var areaLogout = document.getElementById("area-logout");

    if (!areaLogin || !areaLogout)
        return;
    

    if (estaLogado()) {
        areaLogin.style.display = "none";
        areaLogout.style.display = "block";
        document.getElementById("nome-usuario").textContent = obterUsuario();
    } else {
        areaLogin.style.display = "block";
        areaLogout.style.display = "none";
    }
}

verificarTelaLogin();
