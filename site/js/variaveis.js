// Variáveis globais do site
var usuarioLogado = "";

var progressoCursos = {
    html: [],
    c: [],
    csharp: [],
    poo: [],
    python: [],
    javascript: [],
    react: [],
    banco_de_dados: [],
    php: []
};

var cursosFinalizados = {
    html: false,
    c: false,
    csharp: false,
    poo: false,
    python: false,
    javascript: false,
    react: false,
    banco_de_dados: false,
    php: false
};

// Lê os dados que vieram pela URL e guarda nas variáveis
function lerParametrosUrl() {
    var endereco = window.location.href;
    var posicao = endereco.indexOf("?");

    if (posicao === -1)
        return;
    

    var parametros = endereco.substring(posicao + 1);
    var lista = parametros.split("&");

    for (var i = 0; i < lista.length; i++) {
        var par = lista[i].split("=");
        var nome = par[0];
        var valor = par[1];

        if (nome === "usuario") 
            usuarioLogado = valor;

        if (nome.indexOf("progresso_") === 0) {
            var idCurso = nome.replace("progresso_", "");
            progressoCursos[idCurso] = [];

            if (valor !== "") {
                var topicos = valor.split("-");

                for (var j = 0; j < topicos.length; j++) 
                    progressoCursos[idCurso].push(Number(topicos[j]));
            }
        }

        if (nome.indexOf("finalizado_") === 0) {
            var idCursoFinal = nome.replace("finalizado_", "");
            cursosFinalizados[idCursoFinal] = true;
        }
    }
}

// Monta a URL com os dados das variáveis
function montarUrl(pagina) {
    if (usuarioLogado === "") 
        return pagina;

    var url = pagina + "?usuario=" + usuarioLogado;

    if (progressoCursos.html.length > 0) 
        url = url + "&progresso_html=" + progressoCursos.html.join("-");
    
    if (progressoCursos.c.length > 0) 
        url = url + "&progresso_c=" + progressoCursos.c.join("-");
    
    if (progressoCursos.csharp.length > 0) 
        url = url + "&progresso_csharp=" + progressoCursos.csharp.join("-");
    
    if (progressoCursos.poo.length > 0) 
        url = url + "&progresso_poo=" + progressoCursos.poo.join("-");
    
    if (progressoCursos.python.length > 0) 
        url = url + "&progresso_python=" + progressoCursos.python.join("-");
    
    if (progressoCursos.javascript.length > 0) 
        url = url + "&progresso_javascript=" + progressoCursos.javascript.join("-");
    
    if (progressoCursos.react.length > 0) 
        url = url + "&progresso_react=" + progressoCursos.react.join("-");
    
    if (progressoCursos.banco_de_dados.length > 0) 
        url = url + "&progresso_banco_de_dados=" + progressoCursos.banco_de_dados.join("-");
    
    if (progressoCursos.php.length > 0) 
        url = url + "&progresso_php=" + progressoCursos.php.join("-");

    if (cursosFinalizados.html) 
        url = url + "&finalizado_html=sim";
    
    if (cursosFinalizados.c) 
        url = url + "&finalizado_c=sim";
    
    if (cursosFinalizados.csharp) 
        url = url + "&finalizado_csharp=sim";
    
    if (cursosFinalizados.poo) 
        url = url + "&finalizado_poo=sim";
    
    if (cursosFinalizados.python) 
        url = url + "&finalizado_python=sim";
    
    if (cursosFinalizados.javascript) 
        url = url + "&finalizado_javascript=sim";
    
    if (cursosFinalizados.react) 
        url = url + "&finalizado_react=sim";
    
    if (cursosFinalizados.banco_de_dados) 
        url = url + "&finalizado_banco_de_dados=sim";
    
    if (cursosFinalizados.php) 
        url = url + "&finalizado_php=sim";

    return url;
}

// Atualiza os links da página com os dados das variáveis
function atualizarLinks() {
    var links = document.querySelectorAll("a");

    for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute("href");

        if (!href || href.indexOf(".html") === -1) 
            continue;
        
        var pagina = href.split("?")[0];
        links[i].setAttribute("href", montarUrl(pagina));
    }
}

// Limpa as variáveis no logout
function limparDados() {
    usuarioLogado = "";

    progressoCursos.html = [];
    progressoCursos.c = [];
    progressoCursos.csharp = [];
    progressoCursos.poo = [];
    progressoCursos.python = [];
    progressoCursos.javascript = [];
    progressoCursos.react = [];
    progressoCursos.banco_de_dados = [];
    progressoCursos.php = [];

    cursosFinalizados.html = false;
    cursosFinalizados.c = false;
    cursosFinalizados.csharp = false;
    cursosFinalizados.poo = false;
    cursosFinalizados.python = false;
    cursosFinalizados.javascript = false;
    cursosFinalizados.react = false;
    cursosFinalizados.banco_de_dados = false;
    cursosFinalizados.php = false;
}

// Função para ir para outra página mantendo os dados
function irPara(pagina) {
    window.location.href = montarUrl(pagina);
}

lerParametrosUrl();
