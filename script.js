const perguntas = [
    { pergunta: "Qual o maior órgão do corpo humano?", opcoes: ["Coração", "Fígado", "Cérebro", "Pele"], correta: 3, dica: "Ele cobre todo o seu corpo!" },
    { pergunta: "Quantos ossos tem um adulto?", opcoes: ["206", "215", "198", "220"], correta: 0, dica: "Está entre 200 e 210!" },
    { pergunta: "O que é o fêmur?", opcoes: ["Maior músculo", "Maior osso", "Parte do coração", "Tipo de célula"], correta: 1, dica: "É o mais resistente do esqueleto!" },
    { pergunta: "Onde fica o pâncreas?", opcoes: ["Cabeça", "Peito", "Abdômen", "Pelve"], correta: 2, dica: "Fica entre o estômago e o intestino!" },
    { pergunta: "Qual a função dos rins?", opcoes: ["Bombear sangue", "Produzir insulina", "Filtrar o sangue", "Produzir glóbulos brancos"], correta: 2, dica: "Eliminam toxinas pela urina!" },
    { pergunta: "Onde fica a glândula tireoide?", opcoes: ["Pelve", "Pescoço", "Cérebro", "Tórax"], correta: 1, dica: "Está logo abaixo do pomo de Adão!" },
    { pergunta: "Qual desses órgãos faz parte do sistema digestório?", opcoes: ["Baço", "Estômago", "Pulmão", "Coração"], correta: 1, dica: "Recebe os alimentos logo após a boca!" },
    { pergunta: "O que transporta o oxigênio no sangue?", opcoes: ["Plaquetas", "Leucócitos", "Glóbulos vermelhos", "Plasma"], correta: 2, dica: "Dão a cor vermelha ao sangue!" },
    { pergunta: "O diafragma separa quais regiões do corpo?", opcoes: ["Tórax e abdômen", "Cabeça e pescoço", "Perna e pé", "Braço e ombro"], correta: 0, dica: "Está abaixo dos pulmões!" },
    { pergunta: "Qual o nome do líquido que lubrifica as articulações?", opcoes: ["Plasma", "Bile", "Líquido sinovial", "Linfa"], correta: 2, dica: "Evita o atrito entre os ossos!" },
    { pergunta: "Quantos lobos tem o pulmão direito?", opcoes: ["1", "2", "3", "4"], correta: 2, dica: "Tem um a mais que o esquerdo!" },
    // Adicione mais até chegar a 50 perguntas...
];

let indice = 0;
let acertos = 0;
let erros = 0;

function carregarPergunta() {
    if (indice >= perguntas.length) {
        document.getElementById("resultado").innerText = `Quiz finalizado!\nAcertos: ${acertos} \nErros: ${erros}`;
        indice = 0;
        acertos = 0;
        erros = 0;
    }

    document.getElementById("acertos").innerText = acertos;
    document.getElementById("dica").innerText = "";

    const perguntaAtual = perguntas[indice];
    document.getElementById("pergunta").innerText = perguntaAtual.pergunta;

    let opcoesHTML = "";
    perguntaAtual.opcoes.forEach((opcao, i) => {
        opcoesHTML += `<button class='btn' onclick='verificarResposta(${i}, this)'>${opcao}</button>`;
    });
    document.getElementById("opcoes").innerHTML = opcoesHTML;
}

function verificarResposta(escolha, botao) {
    const perguntaAtual = perguntas[indice];

    if (escolha === perguntaAtual.correta) {
        acertos++;
        indice++;
        carregarPergunta();
    } else {
        erros++;
        botao.style.display = "none";
        document.getElementById("dica").innerText = perguntaAtual.dica;
    }
}

carregarPergunta();
