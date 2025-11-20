const perguntas = [
  // --- HISTÓRIA DA PSIQUIATRIA ---
  {
    "pergunta": "Como eram chamados os doentes mentais no Brasil por volta do ano 1800?",
    "opcoes": [
      "Pacientes psiquiátricos.",
      "Alienados mentais.",
      "Neuroatípicos.",
      "Cidadãos especiais."
    ],
    "correta": 1,
    "dica": "O termo usado na época sugeria que eles estavam 'alheios' à realidade."
  },
  {
    "pergunta": "Quem eram os responsáveis por cuidar dos 'alienados mentais' em 1800?",
    "opcoes": [
      "Médicos especializados e enfermeiros.",
      "O Estado e o exército.",
      "A Igreja e os alienistas.",
      "Apenas a família em casa."
    ],
    "correta": 2,
    "dica": "O cuidado era precário e misturava religião com uma medicina inicial."
  },
  {
    "pergunta": "O que marcou o ano de 1900 na história da saúde mental no Brasil?",
    "opcoes": [
      "O início da Revolução Psiquiátrica Brasileira.",
      "A criação do SUS.",
      "A descoberta da cura para a esquizofrenia.",
      "O fim dos manicômios."
    ],
    "correta": 0,
    "dica": "Foi o começo de um movimento de mudança importante."
  },
  {
    "pergunta": "Em que ano se considera o término da 'Revolução Psiquiátrica Brasileira'?",
    "opcoes": [
      "1950.",
      "1988.",
      "2001.",
      "2025."
    ],
    "correta": 2,
    "dica": "Ocorreu logo na virada do milênio."
  },

  // --- NEUROSE E TOC ---
  {
    "pergunta": "Qual característica principal define a Neurose segundo o texto?",
    "opcoes": [
      "É uma doença viral.",
      "É uma psicopatologia relacionada ao Sistema Nervoso.",
      "É uma perda total da realidade.",
      "É um problema exclusivamente genético."
    ],
    "correta": 1,
    "dica": "Afeta a forma como o sistema nervoso reage."
  },
  {
    "pergunta": "Qual a diferença entre Reação Neurótica Aguda e Personalidade Neurótica?",
    "opcoes": [
      "A aguda é crônica e a personalidade é passageira.",
      "A aguda acontece só naquele momento e volta ao normal; a personalidade é frequente.",
      "Não há diferença, ambas são incuráveis.",
      "A personalidade neurótica não é considerada doença."
    ],
    "correta": 1,
    "dica": "Uma é um episódio isolado, a outra é recorrente."
  },
  {
    "pergunta": "Sobre a cura da Neurose e do TOC, o que é correto afirmar?",
    "opcoes": [
      "Nenhum dos dois tem cura.",
      "O TOC tem cura, mas a Neurose não.",
      "A Neurose tem cura; o TOC tem tratamento, mas não tem cura.",
      "Ambos são curáveis com cirurgia."
    ],
    "correta": 2,
    "dica": "O TOC é uma condição crônica que exige manejo constante."
  },
  {
    "pergunta": "Como o texto define a relação entre TOC e Neurose?",
    "opcoes": [
      "O TOC é a evolução da Neurose.",
      "A Neurose é a evolução do TOC.",
      "São doenças opostas.",
      "O TOC é uma forma leve de Neurose."
    ],
    "correta": 0,
    "dica": "O TOC surge a partir de um quadro neurótico que se intensifica."
  },
  {
    "pergunta": "Qual é a característica central do TOC (Transtorno Obsessivo Compulsivo)?",
    "opcoes": [
      "Alucinações visuais.",
      "Perda de memória.",
      "É uma compulsão.",
      "Alegria excessiva."
    ],
    "correta": 2,
    "dica": "Envolve a necessidade incontrolável de realizar rituais ou pensamentos repetitivos."
  },

  // --- TRAUMAS, ESTRESSE E ANSIEDADE ---
  {
    "pergunta": "Para diagnosticar TEPT (Transtorno de Estresse Pós-Traumático), qual é a condição essencial?",
    "opcoes": [
      "Ter nascido com predisposição genética.",
      "Ter sofrido um trauma psicológico.",
      "Ter mais de 40 anos.",
      "Ter problemas de alimentação."
    ],
    "correta": 1,
    "dica": "O próprio nome do transtorno indica que ele vem 'pós' um evento específico."
  },
  {
    "pergunta": "O que caracteriza o Transtorno de Ajustamento?",
    "opcoes": [
      "Um trauma físico grave.",
      "Um trauma social.",
      "Uma disfunção hormonal.",
      "O uso de substâncias químicas."
    ],
    "correta": 1,
    "dica": "Está ligado à dificuldade de se adaptar a mudanças sociais ou ambientais."
  },
  {
    "pergunta": "O que é o Transtorno Somatoforme?",
    "opcoes": [
      "Uma doença apenas física.",
      "Uma invenção do paciente.",
      "Somatização causada por problema físico ou emocional.",
      "Um tipo de autismo."
    ],
    "correta": 2,
    "dica": "Quando a mente converte dores emocionais em sintomas no corpo."
  },
  {
    "pergunta": "Segundo o texto, a Ansiedade comum (não o transtorno) é considerada uma doença?",
    "opcoes": [
      "Sim, sempre deve ser medicada.",
      "Não, não é doença e nem psicopatologia.",
      "Sim, é a doença mais grave do século.",
      "Apenas se durar mais de um mês."
    ],
    "correta": 1,
    "dica": "É uma reação natural, diferente do TAG."
  },
  {
    "pergunta": "O que significa a sigla T.A.G. e qual sua classificação?",
    "opcoes": [
      "Transtorno de Atenção Geral - Não é doença.",
      "Transtorno de Ansiedade Generalizada - É uma psicopatologia.",
      "Tendência à Ansiedade Grave - É passageiro.",
      "Transtorno de Agitação Global - É genético."
    ],
    "correta": 1,
    "dica": "Envolve preocupação excessiva e persistente que afeta o dia a dia."
  },
  {
    "pergunta": "Uma crise de ansiedade pode afetar o quê?",
    "opcoes": [
      "Apenas o batimento cardíaco.",
      "Apenas a respiração.",
      "Os 5 sentidos.",
      "Apenas o sono."
    ],
    "correta": 2,
    "dica": "A percepção sensorial pode ficar alterada durante a crise."
  },
  {
    "pergunta": "Qual é a definição de Síndrome de Burnout apresentada?",
    "opcoes": [
      "Cansaço físico por exercícios.",
      "Esgotamento emocional que vem do trabalho.",
      "Depressão pós-parto.",
      "Estresse causado por luto familiar."
    ],
    "correta": 1,
    "dica": "Está estritamente ligada ao ambiente profissional."
  },

  // --- COGNIÇÃO E DEPRESSÃO ---
  {
    "pergunta": "O que é Cognição?",
    "opcoes": [
      "A capacidade de sentir emoções.",
      "O conjunto de habilidades mentais do ser humano.",
      "A habilidade de praticar esportes.",
      "O sistema de defesa do corpo."
    ],
    "correta": 1,
    "dica": "Envolve aprendizado, memória e raciocínio."
  },
  {
    "pergunta": "Como a Depressão é classificada no texto?",
    "opcoes": [
      "Apenas uma tristeza passageira.",
      "Uma doença psicológica.",
      "Uma falha de caráter.",
      "Um problema exclusivamente hormonal."
    ],
    "correta": 1,
    "dica": "Vai além de estar triste, é uma condição clínica."
  },
  {
    "pergunta": "Qual a sequência descrita para o humor depressivo?",
    "opcoes": [
      "Estresse -> Burnout -> Depressão.",
      "Humor Depressivo -> Tristeza -> Depressão crônica.",
      "Ansiedade -> Pânico -> Depressão.",
      "Tristeza -> Mania -> Depressão."
    ],
    "correta": 1,
    "dica": "Começa com o humor alterado e evolui para a cronicidade."
  },

  // --- HISTERIA ---
  {
    "pergunta": "Como a Histeria era conhecida historicamente e qual sua relação moderna?",
    "opcoes": [
      "Doença dos nervos; hoje é esquizofrenia.",
      "Doença teatral; hoje ligada ao Transtorno do Espectro Histérico.",
      "Possessão; hoje é tratada com antibióticos.",
      "Fingimento; hoje não existe mais."
    ],
    "correta": 1,
    "dica": "O termo 'teatral' refere-se à expressão dramática das emoções."
  },
  {
    "pergunta": "Quem lançou a 'ala das Histerias' em 1930?",
    "opcoes": [
      "Jung.",
      "Freud.",
      "Skinner.",
      "Piaget."
    ],
    "correta": 1,
    "dica": "O pai da psicanálise."
  },
  {
    "pergunta": "Qual a visão de 2025 sobre a personalidade histérica?",
    "opcoes": [
      "É apenas um traço de personalidade engraçado.",
      "É um problema sério de saúde mental.",
      "Não requer tratamento.",
      "É o mesmo que bipolaridade."
    ],
    "correta": 1,
    "dica": "Deixou de ser visto como 'frescura' para ser tratado com seriedade."
  },
  {
    "pergunta": "A Histeria tem relação com qual outra patologia citada?",
    "opcoes": [
      "TOC.",
      "Depressão.",
      "Autismo.",
      "Burnout."
    ],
    "correta": 1,
    "dica": "Problemas emocionais histéricos podem estar ligados a quadros depressivos."
  },

  // --- T.E.A. (AUTISMO) ---
  {
    "pergunta": "O que é o T.E.A.?",
    "opcoes": [
      "Transtorno de Estresse Agudo.",
      "Transtorno do Espectro Autista - Distúrbio do Neurodesenvolvimento.",
      "Transtorno Emocional de Adultos.",
      "Transtorno do Espectro da Ansiedade."
    ],
    "correta": 1,
    "dica": "Afeta o desenvolvimento neurológico desde cedo."
  },
  {
    "pergunta": "Quando aparecem os primeiros sinais do T.E.A. e quando fecha-se o diagnóstico?",
    "opcoes": [
      "Sinais na adolescência; diagnóstico aos 18 anos.",
      "Sinais nos primeiros meses; diagnóstico entre 2 a 3 anos.",
      "Sinais aos 5 anos; diagnóstico aos 10 anos.",
      "Sinais ao nascer; diagnóstico imediato."
    ],
    "correta": 1,
    "dica": "A identificação precoce é fundamental."
  },
  {
    "pergunta": "O que é neuroplasticidade cerebral no contexto do T.E.A.?",
    "opcoes": [
      "A rigidez do cérebro adulto.",
      "A facilidade para aprender, que é maior nos primeiros 5 anos de vida.",
      "A capacidade de curar o autismo.",
      "A perda de neurônios com a idade."
    ],
    "correta": 1,
    "dica": "É o motivo pelo qual a intervenção precoce é tão eficiente."
  },
  {
    "pergunta": "Quais são os níveis do T.E.A. descritos?",
    "opcoes": [
      "Nível A, B e C.",
      "Leve (1), Moderado (2) e Severo (3).",
      "Agudo e Crônico.",
      "Baixo e Alto funcionamento apenas."
    ],
    "correta": 1,
    "dica": "Classificados de 1 a 3 conforme a necessidade de suporte."
  },

  // --- PSICOSE ---
  {
    "pergunta": "Qual a principal definição de Psicose?",
    "opcoes": [
      "Excesso de realidade.",
      "Perda de contato com a realidade.",
      "Dupla personalidade.",
      "Medo de lugares fechados."
    ],
    "correta": 1,
    "dica": "O indivíduo cria uma realidade paralela."
  },
  {
    "pergunta": "O que caracteriza o Delírio na psicose?",
    "opcoes": [
      "Ver coisas que não existem.",
      "Uma falsa certeza e confusão mental.",
      "Ficar paralisado.",
      "Falar outra língua."
    ],
    "correta": 1,
    "dica": "É uma crença inabalável em algo que não é real (ex: achar que está sendo perseguido)."
  },
  {
    "pergunta": "O que é o estado catatônico e a quem é frequentemente associado no texto?",
    "opcoes": [
      "Agitação extrema; associado a bipolares.",
      "Imobilidade ou estupor; associado a usuários de drogas.",
      "Sono profundo; associado a depressivos.",
      "Fala rápida; associado a ansiosos."
    ],
    "correta": 1,
    "dica": "A pessoa pode ficar 'congelada', sem reação."
  },
  {
    "pergunta": "O que é a Psicose Puerperal?",
    "opcoes": [
      "Psicose causada por drogas.",
      "Evolução de um quadro pós-parto.",
      "Psicose em idosos.",
      "Psicose infantil."
    ],
    "correta": 1,
    "dica": "Ocorre em mulheres logo após terem bebê."
  },

  // --- BIPOLARIDADE ---
  {
    "pergunta": "A Bipolaridade afeta principalmente o quê?",
    "opcoes": [
      "A memória.",
      "O humor (oscilando entre depressivo e maníaco).",
      "A coordenação motora.",
      "A fala."
    ],
    "correta": 1,
    "dica": "São dois polos opostos de emoção."
  },
  {
    "pergunta": "Como é descrito o estado maníaco na bipolaridade?",
    "opcoes": [
      "Tristeza profunda.",
      "Energia absurda.",
      "Medo intenso.",
      "Sonolência."
    ],
    "correta": 1,
    "dica": "A pessoa sente-se invencível, eufórica e agitada."
  },
  {
    "pergunta": "O que caracteriza o Tipo 1 de Bipolaridade?",
    "opcoes": [
      "Apenas depressão.",
      "Semanas de depressão e episódios fortes e rápidos de mania (mais comum).",
      "Manias leves e depressão curta.",
      "Apenas manias."
    ],
    "correta": 1,
    "dica": "É o tipo clássico e mais frequente."
  },
  {
    "pergunta": "Qual a dificuldade do Bipolar Tipo 2?",
    "opcoes": [
      "Não tem tratamento.",
      "O episódio de mania é mais leve, tornando o diagnóstico difícil.",
      "A pessoa não tem depressão.",
      "Só afeta crianças."
    ],
    "correta": 1,
    "dica": "A hipomania (mania leve) pode ser confundida com apenas um 'bom humor'."
  },
  {
    "pergunta": "O que é o tipo Ciclotímico na bipolaridade?",
    "opcoes": [
      "Troca de humor a cada hora.",
      "Período longo de depressão (anos) e mania por alguns dias.",
      "Sem depressão, apenas mania crônica.",
      "Depressão leve que dura semanas."
    ],
    "correta": 1,
    "dica": "É marcado pela longa duração da fase baixa."
  },

  // --- ESQUIZOFRENIA ---
  {
    "pergunta": "Sobre a origem da Esquizofrenia, o que o texto afirma?",
    "opcoes": [
      "A pessoa já nasce com a doença manifestada.",
      "É causada apenas por vírus.",
      "Não se nasce com ela, ela se desenvolve (tem fatores, não causa única).",
      "É contagiosa."
    ],
    "correta": 2,
    "dica": "É uma combinação de predisposição e ambiente."
  },
  {
    "pergunta": "Qual a faixa etária comum para o desenvolvimento da Esquizofrenia?",
    "opcoes": [
      "Crianças de 5 a 10 anos.",
      "Homens 20-25 e mulheres 25-30 anos.",
      "Idosos acima de 60 anos.",
      "Adolescentes de 12 a 15 anos."
    ],
    "correta": 1,
    "dica": "Surge no início da vida adulta."
  },
  {
    "pergunta": "Quais fatores contribuem para o desenvolvimento da Esquizofrenia?",
    "opcoes": [
      "Apenas alimentação.",
      "Predisposição genética, traumas e problemas na gravidez/parto.",
      "Falta de estudo.",
      "Sedentarismo."
    ],
    "correta": 1,
    "dica": "Problemas ocorridos antes, durante ou depois da gestação influenciam."
  },
  {
    "pergunta": "A Esquizofrenia tem uma causa única definida?",
    "opcoes": [
      "Sim, é genética.",
      "Sim, é trauma.",
      "Não, ela tem fatores múltiplos.",
      "Sim, é uso de drogas."
    ],
    "correta": 2,
    "dica": "Não existe um único 'culpado', é multifatorial."
  },

  // --- PERGUNTAS FINAIS (MISTAS) ---
  {
    "pergunta": "Segundo o texto, o órgão que cataloga transtornos mentais é o:",
    "opcoes": [
      "OMS.",
      "DSM.",
      "SUS.",
      "MEC."
    ],
    "correta": 1,
    "dica": "Manual Diagnóstico e Estatístico de Transtornos Mentais."
  }
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

