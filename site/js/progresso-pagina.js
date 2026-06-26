var tabelaContainer = document.querySelector(".tabela-container");
var avisoLogin = document.getElementById("aviso-login");

// Só mostra a tabela se o login foi realizado
if (!estaLogado()) {
    if (tabelaContainer) 
        tabelaContainer.style.display = "none";
    
    if (avisoLogin) 
        avisoLogin.style.display = "block";
    
} else {
    // Lista de todos os cursos do site
    var cursos = [
        { id: "html", nome: "HTML", total: 4 },
        { id: "c", nome: "Linguagem C", total: 4 },
        { id: "csharp", nome: "C#", total: 4 },
        { id: "poo", nome: "Programação Orientada a Objetos", total: 4 },
        { id: "python", nome: "Python", total: 4 },
        { id: "javascript", nome: "JavaScript", total: 4 },
        { id: "react", nome: "React", total: 4 },
        { id: "banco_de_dados", nome: "Banco de Dados", total: 4 },
        { id: "php", nome: "PHP", total: 4 }
    ];

    var corpoTabela = document.getElementById("corpo-tabela");

    for (var i = 0; i < cursos.length; i++) {
        var curso = cursos[i];
        var quantidadeConcluida = progressoCursos[curso.id].length;
        var porcentagem = Math.round((quantidadeConcluida / curso.total) * 100);
        var finalizado = cursosFinalizados[curso.id];
        var statusTexto = finalizado ? "Concluído" : "Em andamento";
        var statusClasse = finalizado ? "status-concluido" : "status-andamento";

        // Cria a linha da tabela
        var linha = document.createElement("tr");

        linha.innerHTML =
            "<td>" + curso.nome + "</td>" +
            "<td>" +
                "<div class='barra-tabela'>" +
                    "<div class='barra-tabela-preenchida' style='width: " + porcentagem + "%;'></div>" +
                "</div>" +
                "<span>" + porcentagem + "%</span>" +
            "</td>" +
            "<td class='" + statusClasse + "'>" + statusTexto + "</td>";

        corpoTabela.appendChild(linha);
    }
}
