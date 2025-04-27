const perguntas = [
    { pergunta: "Qual é a principal função do Processo Comunicativo?", opcoes: ["Expressar emoções apenas", "Trocar informações e compreender a língua", "Imitar sons da natureza", "Criar códigos secretos"], correta: 1, dica: "O processo comunicativo envolve a troca, desenvolvimento e compreensão de informações." },
    
    { pergunta: "Quem é responsável por enviar a mensagem na comunicação?", opcoes: ["Canal", "Receptor", "Emissor", "Ruído"], correta: 2, dica: "O emissor é quem inicia a comunicação emitindo a mensagem." },
    
    { pergunta: "Quem recebe a mensagem no processo comunicativo?", opcoes: ["Emissor", "Canal", "Receptor", "Código"], correta: 2, dica: "O receptor é o destino final da mensagem enviada." },
    
    { pergunta: "O que é considerado o canal da comunicação?", opcoes: ["Ambiente físico", "Meio de transmissão da mensagem", "O emissor", "Código utilizado"], correta: 1, dica: "O canal é o meio por onde a mensagem é transportada." },
    
    { pergunta: "Ruídos na comunicação são:", opcoes: ["Facilitadores de entendimento", "Fisicos e sentimentais", "Formas de Barulho", "Fisicos e psicológicos"], correta: 3, dica: "Ruídos atrapalham a transmissão da mensagem, físicos ou psicológicos." },
    
    { pergunta: "A semântica na comunicação está ligada a:", opcoes: ["Envio de mensagens", "Velocidade da fala", "Compreensão do significado", "Meio físico da transmissão"], correta: 2, dica: "Semântica é o modo como interpretamos o sentido da mensagem." },
    
    { pergunta: "A comunicação verbal ocorre através de:", opcoes: ["Gestos e expressões", "Códigos de conduta", "Fala e escrita", "Movimentos corporais"], correta: 2, dica: "A comunicação verbal é feita pela linguagem falada ou escrita." },
    
    { pergunta: "Comunicação não verbal se manifesta principalmente por:", opcoes: ["Expressões corporais e gestos", "Discursos formais", "Palestras científicas", "Redações e artigos"], correta: 0, dica: "Sem usar palavras, nos comunicamos com o corpo e expressões." },
    
    { pergunta: "O feedback numa comunicação é:", opcoes: ["O meio de transmissão", "Resposta ou reação do receptor", "Um ruído externo", "Códigos visuais"], correta: 1, dica: "Feedback é a resposta que confirma ou contesta a mensagem recebida." },
    
    { pergunta: "A correção gramatical em um texto é importante para:", opcoes: ["Complicar a comunicação", "Deixar o texto claro e compreensível", "Gerar ruídos", "Criar variações linguísticas"], correta: 1, dica: "Um texto gramaticalmente correto é entendido com facilidade." },
    
    { pergunta: "Um texto claro gera:", opcoes: ["Dúvidas e confusão", "Conflitos de entendimento", "Compreensão objetiva", "Erros de interpretação"], correta: 2, dica: "Clareza no texto gera entendimento imediato." },
    
    { pergunta: "Um texto incerto traz:", opcoes: ["Segurança de interpretação", "Dúvidas e problemas de entendimento", "Mais clareza ao receptor", "Confirmação automática"], correta: 1, dica: "Incerteza no texto abre espaço para má interpretação." },
    
    { pergunta: "A função emotiva da linguagem expressa:", opcoes: ["Sentimentos e emoções", "Dados estatísticos", "Realidade objetiva", "Instruções técnicas"], correta: 0, dica: "Fala-se de emoções quando usamos a função emotiva." },
    
    { pergunta: "A função referencial da linguagem busca:", opcoes: ["Transmitir emoções", "Convencer o leitor", "Realidade nua e crua", "Manter o canal de comunicação"], correta: 2, dica: "Referencial é passar informações diretas e concretas." },
    
    { pergunta: "A função apelativa (Você nunca mais vera isso) da linguagem tenta:", opcoes: ["Informar dados", "Expressar sentimentos", "Persuadir o receptor", "Cantar versos"], correta: 2, dica: "Apelativa quer mudar a atitude do receptor." },
    
    { pergunta: "A função fática (Aham, sei...) da linguagem serve para:", opcoes: ["Manter a comunicação", "Persuadir o interlocutor", "Expressar emoções profundas", "Contar histórias"], correta: 0, dica: "É a função usada para garantir que o canal está funcionando." },
    
    { pergunta: "A função poética da linguagem valoriza:", opcoes: ["A estética e romântica de falar", "A persuasão política", "A realidade nua e crua", "Fugir da realidade de forma mais leve"], correta: 3, dica: "Na função poética, o jeito de dizer é tão importante quanto o que se diz." },
    
    { pergunta: "O que representa a variação linguística culta?", opcoes: ["Erros gramaticais comuns", "Língua padrão-idioma ", "Gírias de internet", "Expressões regionais"], correta: 1, dica: "Culta é a variação da língua usada formalmente." },
    
    { pergunta: "Dialetos são variações ligadas a:", opcoes: ["Idade", "Profissão", "Sexo", "Região"], correta: 3, dica: "Dialetos diferem entre regiões geográficas." },
    
    { pergunta: "Socioletos são usados por grupos definidos por:", opcoes: ["Área de estudo", "Comunidade social específica", "Idade", "Região"], correta: 1, dica: "Socioletos aparecem em diferentes grupos sociais." },
    
    { pergunta: "Idioletos se referem a:", opcoes: ["Um tipo de gíria", "A linguagem usada em grupos étnicos", "A fala individual de cada pessoa", "Variações dentro de regiões"], correta: 2, dica: "Cada pessoa tem seu jeito único de falar: isso é o idioleto." },
    
    { pergunta: "Registros linguísticos são empregados em:", opcoes: ["Ambientes informais", "Cartas, documentos e profissões", "Conversas casuais", "Debates informais"], correta: 1, dica: "Registros são padrões formais usados em documentos e profissões." },
    
    { pergunta: "Etnoletos referem-se a variações linguísticas de:", opcoes: ["Classes sociais", "Famílias", "Grupos étnicos", "Grupos políticos"], correta: 2, dica: "Etnoletos surgem em comunidades étnicas específicas." },
    
    { pergunta: "Ecoletos são variações usadas:", opcoes: ["Na vida acadêmica", "Adotado para uma casa", "Na vida empresarial", "Na comunicação política"], correta: 1, dica: "Ecoletos se formam dentro dos lares." },
    
    { pergunta: "A tipologia é o estudo de:", opcoes: ["Tipos de textos", "Linguagem corporal", "Formas de comunicação verbal", "Expressões artísticas"], correta: 0, dica: "Tipologia analisa os diferentes tipos de textos existentes." },
    
    { pergunta: "Coesão textual se refere à:", opcoes: ["Correção gramatical", "Harmonia", "Expressão de sentimentos", "Estética textual"], correta: 1, dica: "Coesão é o que mantém as partes do texto unidas de forma lógica." },
    
    { pergunta: "Coerência textual é:", opcoes: ["A ordem gramatical", "A extensão do vocabulário", "A variedade de palavras difíceis", "A lógica"], correta: 3, dica: "Coerência dá sentido e sequência lógica ao texto." },
    
    { pergunta: "Acentuação gráfica indica:", opcoes: ["Pontuação correta", "Timbre e som das palavras", "A beleza estética do texto", "Dificuldade linguística"], correta: 1, dica: "Acentuação ajuda a pronunciar e entender corretamente as palavras." },

    { pergunta: "Que acento é esse (^):", opcoes: ["Chapéu", "Til", "Agudo e Grave", "Circunflexo"], correta: 3, dica: "Acento muito usado" },

    { pergunta: "Que acento é esse (~):", opcoes: ["Chapéu", "Til", "Agudo e Grave", "Circunflexo"], correta: 1, dica: "Acento muito usado" },

    { pergunta: "Que acento é esse (´`):", opcoes: ["Chapéu", "Til", "Agudo e Grave", "Circunflexo"], correta: 2, dica: "Acento muito usado" },
    
    { pergunta: "Palavras oxítonas têm a sílaba tônica:", opcoes: ["Na última sílaba", "Na primeira sílaba", "Na penúltima sílaba", "Na antepenúltima sílaba"], correta: 0, dica: "Oxítonas sofá, café..." },
    
    { pergunta: "Palavras paroxítonas são aquelas com a sílaba tônica:", opcoes: ["Na última sílaba", "Na penúltima sílaba", "Na primeira sílaba", "Na antepenúltima sílaba"], correta: 1, dica: "Paroxítonas irmã, orfãs..." }

    { pergunta: "Palavras proparoxítonas são aquelas com a sílaba tônica:", opcoes: ["Na última sílaba", "Na penúltima sílaba", "Na primeira sílaba", "Na antepenúltima sílaba"], correta: 3, dica: "São todas acentuadas" }
    ]
    


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
    
    // Se a resposta estiver correta e for a primeira tentativa
    if (escolha === perguntaAtual.correta) {
        // Verifica se é a primeira tentativa (se a dica não foi mostrada)
        if (!document.getElementById("dica").innerText) {
            acertos++; // Acerta de primeira
        }
        indice++;
        carregarPergunta();
    } else {
        // Se errou, aumenta a quantidade de erros e esconde o botão
        if (!document.getElementById("dica").innerText) {
            erros++; // Conta como erro se for a primeira tentativa
        }
        botao.style.display = "none";
        document.getElementById("dica").innerText = perguntaAtual.dica;
    }
}

carregarPergunta();

