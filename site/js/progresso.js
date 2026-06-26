var progressoCurso = document.querySelector(".progresso-curso");

// Só mostra o progresso se o login foi realizado
if (!estaLogado()) {
    if (progressoCurso) 
        progressoCurso.style.display = "none";
    
} else {
    // Identifica o curso pela página
    var cursoId = document.body.getAttribute("data-curso");
    var nomeCurso = document.querySelector("h1").textContent;

    // Seleciona os tópicos do curso
    var topicos = document.querySelectorAll("details.item");
    var totalTopicos = topicos.length;

    // Elementos da barra de progresso
    var barra = document.getElementById("barra-progresso");
    var porcentagemTexto = document.getElementById("porcentagem");
    var btnFinalizar = document.getElementById("btn-finalizar");

    // Usa a variável de progresso do curso
    var topicosConcluidos = progressoCursos[cursoId];

    // Salva o progresso na variável
    function salvarProgresso() {
        progressoCursos[cursoId] = topicosConcluidos;
        atualizarLinks();
    }

    // Atualiza a barra e o botão
    function atualizarBarra() {
        var porcentagem = Math.round((topicosConcluidos.length / totalTopicos) * 100);

        barra.style.width = porcentagem + "%";
        porcentagemTexto.textContent = porcentagem;

        if (porcentagem >= 100) 
            btnFinalizar.disabled = false;
        else 
            btnFinalizar.disabled = true;   
    }

    // Quando o aluno abrir um tópico, conta como concluído
    for (var i = 0; i < topicos.length; i++) {
        topicos[i].addEventListener("toggle", function () {
            if (this.open) {
                var indice = Array.prototype.indexOf.call(topicos, this);

                if (topicosConcluidos.indexOf(indice) === -1) {
                    topicosConcluidos.push(indice);
                    salvarProgresso();
                    atualizarBarra();
                }
            }
        });
    }

    // Quando clicar no botão de curso finalizado
    btnFinalizar.addEventListener("click", function () {
        alert("Parabéns! Você concluiu o curso de " + nomeCurso + "!");
        cursosFinalizados[cursoId] = true;
        btnFinalizar.textContent = "Curso concluído!";
        btnFinalizar.disabled = true;
        atualizarLinks();
    });

    // Se o curso já foi finalizado, mantém o botão desabilitado
    if (cursosFinalizados[cursoId]) {
        btnFinalizar.textContent = "Curso concluído!";
        btnFinalizar.disabled = true;
    }

    atualizarBarra();
}
