const perguntas = [
  // --- HISTÓRIA DA PSIQUIATRIA E INTRODUÇÃO ---
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
    "dica": "O cuidado era precário e misturava religião com uma medicina inicial (alienistas)."
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
    "dica": "Foi o começo de um movimento de mudança que durou até 2001."
  },
  {
    "pergunta": "Qual evento marca o fim da Revolução Psiquiátrica em 2001?",
    "opcoes": [
      "A descoberta de novos medicamentos.",
      "A Lei nº 10.216 (Lei do Suporte).",
      "A construção de novos hospitais psiquiátricos.",
      "A extinção da profissão de psiquiatra."
    ],
    "correta": 1,
    "dica": "Esta lei dispõe sobre a proteção e os direitos das pessoas portadoras de transtornos mentais."
  },
  {
    "pergunta": "Qual caso famoso é citado nas anotações como referência para a mudança na lei e suporte em 2001?",
    "opcoes": [
      "Caso Ximenes.",
      "Caso Freud.",
      "Caso Pinel.",
      "Caso Nise."
    ],
    "correta": 0,
    "dica": "Refere-se a Damião Ximenes Lopes, um caso emblemático de violação de direitos."
  },
  {
    "pergunta": "De acordo com as anotações, o que significa CAPSi?",
    "opcoes": [
      "Centro de Apoio Psicossocial Infantil.",
      "Centro de Acolhimento Psicossocial.",
      "Centro de Atenção e Prevenção de Sintomas.",
      "Clínica de Apoio Psicológico Intensivo."
    ],
    "correta": 1,
    "dica": "Nas anotações é descrito como 'Centro de acolhimento'."
  },
  {
    "pergunta": "Qual é a relação entre físico e mental descrita nas anotações?",
    "opcoes": [
      "São independentes, um não afeta o outro.",
      "Se você não estiver bem mentalmente, não ficará bem no físico.",
      "O físico afeta o mental, mas o mental não afeta o físico.",
      "A saúde mental é secundária à saúde física."
    ],
    "correta": 1,
    "dica": "As anotações destacam que a mente afeta diretamente o corpo."
  },
  {
    "pergunta": "O que é Psicopatologia?",
    "opcoes": [
      "Estudo da anatomia cerebral.",
      "Uma doença psicológica.",
      "Um tipo de terapia.",
      "Um medicamento controlado."
    ],
    "correta": 1,
    "dica": "O termo é usado nas notas para definir as doenças da mente."
  },

  // --- NEUROSE E TOC ---
  {
    "pergunta": "A Neurose é caracterizada por problemas em qual sistema?",
    "opcoes": [
      "Sistema Digestivo.",
      "Sistema Nervoso (SN).",
      "Sistema Respiratório.",
      "Sistema Imunológico."
    ],
    "correta": 1,
    "dica": "Envolve o SN mandando sinais errados para o corpo."
  },
  {
    "pergunta": "Qual é a definição de 'Reação Neurótica Aguda'?",
    "opcoes": [
      "É uma neurose constante que dura a vida toda.",
      "Não tem neurose constante, acontece só naquele momento e volta ao normal.",
      "É o estágio final da neurose.",
      "É quando o paciente precisa de internação imediata."
    ],
    "correta": 1,
    "dica": "É um episódio isolado, geralmente desencadeado por um gatilho."
  },
  {
    "pergunta": "O que caracteriza a 'Personalidade Neurótica'?",
    "opcoes": [
      "Ocorre apenas uma vez na vida.",
      "Acontece com frequência, o paciente tem a neurose constante.",
      "Não tem relação com o sistema nervoso.",
      "É impossível de diagnosticar."
    ],
    "correta": 1,
    "dica": "Diferente da reação aguda, aqui o quadro é frequente."
  },
  {
    "pergunta": "De acordo com as anotações, a Neurose tem cura?",
    "opcoes": [
      "Sim, quando tratada tem cura.",
      "Não, é uma condição permanente.",
      "Apenas a reação aguda tem cura.",
      "Não, evolui sempre para psicose."
    ],
    "correta": 0,
    "dica": "As anotações afirmam explicitamente que 'Neurose tem cura'."
  },
  {
    "pergunta": "O que significa a sigla TOC?",
    "opcoes": [
      "Transtorno de Organização Crônica.",
      "Transtorno Obsessivo Compulsivo.",
      "Tratamento de Ordem Cerebral.",
      "Trauma Ocorrido na Criança."
    ],
    "correta": 1,
    "dica": "É descrito como uma evolução da neurose."
  },
  {
    "pergunta": "Como o TOC é descrito em relação à Neurose nas anotações?",
    "opcoes": [
      "É uma forma mais leve de neurose.",
      "É a cura da neurose.",
      "É uma evolução ou piora da neurose.",
      "Não tem relação com a neurose."
    ],
    "correta": 2,
    "dica": "As notas mencionam que é uma 'piora da neurose'."
  },
  {
    "pergunta": "Sobre o tratamento e cura do TOC, o que dizem as anotações da primeira imagem?",
    "opcoes": [
      "Tem cura rápida.",
      "Não tem tratamento.",
      "Tem tratamento e não tem cura.",
      "Cura-se sozinho com o tempo."
    ],
    "correta": 2,
    "dica": "Diferente da neurose geral, o TOC é descrito nessa parte como tendo tratamento, mas não cura."
  },
  {
    "pergunta": "Qual é uma característica central do TOC mencionada?",
    "opcoes": [
      "Alucinações visuais.",
      "Perda de memória.",
      "Compulsão e ter um 'alvo'.",
      "Tristeza profunda."
    ],
    "correta": 2,
    "dica": "Envolve rituais ou ações fora do controle."
  },

  // --- HISTERIA ---
  {
    "pergunta": "Historicamente (Idade Média), a que a Histeria estava associada?",
    "opcoes": [
      "Ao excesso de trabalho.",
      "A crenças religiosas e influência demoníaca.",
      "A vírus e bactérias.",
      "A má alimentação."
    ],
    "correta": 1,
    "dica": "Era vista sob uma ótica mística/religiosa antes da medicina moderna."
  },
  {
    "pergunta": "Qual psicanalista começou a trabalhar na 'ala das histéricas' em 1900?",
    "opcoes": [
      "Carl Jung.",
      "Sigmund Freud.",
      "Jean Piaget.",
      "Nise da Silveira."
    ],
    "correta": 1,
    "dica": "Ele definiu o Transtorno do Espectro Histérico."
  },
  {
    "pergunta": "Por que a Histeria é chamada de 'Doença Teatral' nas anotações?",
    "opcoes": [
      "Porque afeta apenas atores.",
      "Porque os sintomas são falsos.",
      "Porque envolve emoções exageradas e necessidade de 'plateia'.",
      "Porque se cura com teatro."
    ],
    "correta": 2,
    "dica": "O comportamento vai 'além do normal', é exagerado."
  },
  {
    "pergunta": "A histeria pode evoluir para qual outro quadro se não tratada?",
    "opcoes": [
      "Esquizofrenia.",
      "Depressão.",
      "Autismo.",
      "TDAH."
    ],
    "correta": 1,
    "dica": "As anotações dizem: 'Histeria antes da depressão: ela pode desenvolver a depressão'."
  },
  {
    "pergunta": "Segundo Freud, o que representa o ID?",
    "opcoes": [
      "A razão e a lógica.",
      "A ética e a moral.",
      "O desejo íntimo / 'criança interior'.",
      "O contato com a realidade."
    ],
    "correta": 2,
    "dica": "É a parte instintiva da psique."
  },
  {
    "pergunta": "Segundo Freud, o que representa o Superego?",
    "opcoes": [
      "O desejo sexual.",
      "A ética e a moral.",
      "O racional.",
      "A histeria."
    ],
    "correta": 1,
    "dica": "É a parte que julga e impõe regras sociais."
  },
  {
    "pergunta": "Segundo Freud, o que representa o EGO?",
    "opcoes": [
      "O Racional.",
      "O Inconsciente profundo.",
      "Os sonhos.",
      "A religiosidade."
    ],
    "correta": 0,
    "dica": "É a parte que equilibra os desejos e a realidade."
  },
  {
    "pergunta": "Qual é o sexo mais afetado historicamente pela ideia de Histeria, embora afete ambos?",
    "opcoes": [
      "Masculino.",
      "Feminino.",
      "Ambos igualmente.",
      "Crianças apenas."
    ],
    "correta": 1,
    "dica": "Freud inicialmente focou seus estudos no sexo feminino ('útero')."
  },

  // --- TEA (TRANSTORNO DO ESPECTRO AUTISTA) ---
  {
    "pergunta": "O TEA é classificado como um distúrbio de que tipo?",
    "opcoes": [
      "Doença degenerativa.",
      "Neurodesenvolvimento.",
      "Doença contagiosa.",
      "Trauma físico."
    ],
    "correta": 1,
    "dica": "Afeta como o cérebro se desenvolve desde cedo."
  },
  {
    "pergunta": "Qual a idade média para fechar o diagnóstico de TEA segundo as anotações?",
    "opcoes": [
      "Ao nascer.",
      "6 meses.",
      "2 a 3 anos.",
      "10 anos."
    ],
    "correta": 2,
    "dica": "Embora os sinais apareçam antes, o diagnóstico fecha nessa faixa."
  },
  {
    "pergunta": "O que é Neuroplasticidade cerebral?",
    "opcoes": [
      "A morte dos neurônios.",
      "A facilidade do cérebro em aprender, especialmente nos primeiros 5 anos.",
      "A rigidez do cérebro adulto.",
      "Uma cirurgia cerebral."
    ],
    "correta": 1,
    "dica": "Permite que o bebê aprenda coisas com muita facilidade."
  },
  {
    "pergunta": "Geralmente, qual sexo é mais diagnosticado com TEA?",
    "opcoes": [
      "Feminino.",
      "Masculino.",
      "Não há diferença.",
      "Não se aplica."
    ],
    "correta": 1,
    "dica": "As anotações citam: 'Geralmente são do sexo masculino'."
  },
  {
    "pergunta": "Existe uma causa única para o Autismo?",
    "opcoes": [
      "Sim, é puramente genético.",
      "Sim, é causado por vacinas.",
      "Não, é multifatorial (vários fatores).",
      "Sim, é causado por trauma no parto apenas."
    ],
    "correta": 2,
    "dica": "Não há causa única, mas fatores que aumentam o risco."
  },
  {
    "pergunta": "Qual destes é citado como um fator de risco para TEA?",
    "opcoes": [
      "Uso de substâncias na gravidez.",
      "Comer muito açúcar.",
      "Assistir muita TV.",
      "Falta de exercícios."
    ],
    "correta": 0,
    "dica": "Fatores pré-natais influenciam o risco."
  },
  {
    "pergunta": "O que significa a sigla DSM mencionada nas anotações sobre TEA?",
    "opcoes": [
      "Departamento de Saúde Mental.",
      "Órgão/Manual sobre transtorno mental.",
      "Diretoria de Saúde Médica.",
      "Diagnóstico Superior Mental."
    ],
    "correta": 1,
    "dica": "É a referência para classificar os níveis (Leve, Moderado, Severo)."
  },
  {
    "pergunta": "Quais são os três níveis de TEA citados?",
    "opcoes": [
      "Baixo, Médio, Alto.",
      "Leve, Moderado, Severo.",
      "Inicial, Intermediário, Terminal.",
      "A, B e C."
    ],
    "correta": 1,
    "dica": "Classificação baseada na necessidade de suporte."
  },

  // --- PSICOSE ---
  {
    "pergunta": "Qual a definição principal de Psicose?",
    "opcoes": [
      "Excesso de tristeza.",
      "Perda de contato com a realidade.",
      "Medo de lugares fechados.",
      "Dificuldade de aprendizado."
    ],
    "correta": 1,
    "dica": "O indivíduo não distingue o real do imaginário."
  },
  {
    "pergunta": "O que é um Delírio?",
    "opcoes": [
      "Ver coisas que não existem.",
      "Uma falsa certeza / confusão mental.",
      "Ouvir vozes.",
      "Ficar paralisado."
    ],
    "correta": 1,
    "dica": "Diferente da alucinação (sentidos), o delírio é uma crença/ideia falsa."
  },
  {
    "pergunta": "O que é Alucinação (representada pela letra A nas notas)?",
    "opcoes": [
      "Uma crença falsa.",
      "Percepção sensorial de algo que não existe (ver/ouvir).",
      "Falta de memória.",
      "Agressividade."
    ],
    "correta": 1,
    "dica": "Pode afetar os sentidos (visão, audição)."
  },
  {
    "pergunta": "O que é Catatonia?",
    "opcoes": [
      "Agitação extrema.",
      "Estado de imobilidade ou movimentos anormais, comum em usuários de drogas.",
      "Fala compulsiva.",
      "Alegria excessiva."
    ],
    "correta": 1,
    "dica": "O corpo pode ficar rígido ou em posições estranhas."
  },
  {
    "pergunta": "A Psicose é considerada uma doença ou um sintoma?",
    "opcoes": [
      "Uma doença independente.",
      "Um sintoma que pode aparecer em vários transtornos.",
      "Um tipo de personalidade.",
      "Uma escolha do paciente."
    ],
    "correta": 1,
    "dica": "Pode aparecer na bipolaridade, esquizofrenia ou uso de drogas."
  },
  {
    "pergunta": "O que é a 'Perturbação Psicótica Breve'?",
    "opcoes": [
      "Uma psicose que dura a vida toda.",
      "Um surto passageiro.",
      "Uma psicose leve que ninguém percebe.",
      "O mesmo que Esquizofrenia."
    ],
    "correta": 1,
    "dica": "Geralmente surge em jovens e passa."
  },
  {
    "pergunta": "Qual é o tripé do tratamento para Psicose citado?",
    "opcoes": [
      "Dieta, exercício e sono.",
      "Psicoterapia, medicação e internação.",
      "Oração, jejum e conversa.",
      "Isolamento, castigo e trabalho."
    ],
    "correta": 1,
    "dica": "Envolve abordagem médica e psicológica intensiva."
  },
  {
    "pergunta": "O que é Psicose Puerperal?",
    "opcoes": [
      "Psicose causada por drogas.",
      "Evolução de um quadro pós-parto.",
      "Psicose em idosos.",
      "Psicose infantil."
    ],
    "correta": 1,
    "dica": "Acontece com mulheres logo após terem bebê."
  },

  // --- TRANSTORNO BIPOLAR ---
  {
    "pergunta": "O Transtorno Bipolar afeta principalmente o quê?",
    "opcoes": [
      "A personalidade.",
      "O humor.",
      "A inteligência.",
      "A coordenação motora."
    ],
    "correta": 1,
    "dica": "As notas dizem: 'Não afeta personalidade, sim o humor'."
  },
  {
    "pergunta": "Quais são os dois polos do Transtorno Bipolar?",
    "opcoes": [
      "Amor e Ódio.",
      "Depressivo e Maníaco.",
      "Raiva e Medo.",
      "Ansiedade e Pânico."
    ],
    "correta": 1,
    "dica": "O paciente oscila entre tristeza profunda e euforia."
  },
  {
    "pergunta": "O que caracteriza o episódio Maníaco?",
    "opcoes": [
      "Sono excessivo e lentidão.",
      "Tristeza e choro.",
      "Euforia, energia absurda, fala compulsiva.",
      "Isolamento social."
    ],
    "correta": 2,
    "dica": "É o oposto da depressão: picos de energia."
  },
  {
    "pergunta": "O que caracteriza o Bipolar Tipo 1?",
    "opcoes": [
      "Episódios de mania leves.",
      "Apenas depressão.",
      "Episódios fortes e rápidos de mania, seguidos de depressão.",
      "Não tem mania."
    ],
    "correta": 2,
    "dica": "É o tipo onde a mania é mais evidente e intensa."
  },
  {
    "pergunta": "O que caracteriza o Bipolar Tipo 2?",
    "opcoes": [
      "Mania muito agressiva.",
      "Episódios maníacos mais amenos/leves.",
      "Ausência de depressão.",
      "Alucinações constantes."
    ],
    "correta": 1,
    "dica": "A mania é mais leve, o que pode dificultar o diagnóstico (parece que a pessoa só melhorou)."
  },
  {
    "pergunta": "O que é o Tipo Ciclotímico?",
    "opcoes": [
      "Mudança de humor a cada hora.",
      "Períodos longos (anos) de depressão seguidos de mania.",
      "Cura rápida da bipolaridade.",
      "Bipolaridade causada por ciclismo."
    ],
    "correta": 1,
    "dica": "É raro e envolve ciclos de longa duração."
  },
  {
    "pergunta": "O Transtorno Bipolar tem gatilho específico (como uma tristeza)?",
    "opcoes": [
      "Sim, sempre começa com uma perda.",
      "Não, não tem gatilho específico como a tristeza comum.",
      "Sim, o estresse no trabalho é o único gatilho.",
      "Depende da idade."
    ],
    "correta": 1,
    "dica": "Diferente da tristeza reativa, a mudança de humor bipolar é química/interna."
  },
  {
    "pergunta": "Quais são sintomas do polo Depressivo no Bipolar?",
    "opcoes": [
      "Gastos compulsivos e euforia.",
      "Falta de energia, perda de motivação, ideação suicida.",
      "Irritabilidade e fala rápida.",
      "Sensação de grandiosidade."
    ],
    "correta": 1,
    "dica": "Sintomas clássicos de 'baixa' energia."
  },

  // --- OUTRAS PATOLOGIAS E TERMOS (TEPT, ESQUIZOFRENIA, ETC) ---
  {
    "pergunta": "O que é TEPT?",
    "opcoes": [
      "Transtorno de Estresse Pós-Traumático.",
      "Transtorno Emocional Para Trabalho.",
      "Tratamento Especial Para Tensão.",
      "Técnica de Enfermagem Para Trauma."
    ],
    "correta": 0,
    "dica": "Exige a existência de um trauma psicológico anterior."
  },
  {
    "pergunta": "É possível ter TEPT sem ter sofrido um trauma?",
    "opcoes": [
      "Sim, é genético.",
      "Não, 'não dá pra ter TEPT sem um trauma'.",
      "Sim, se tiver depressão.",
      "Talvez, depende do médico."
    ],
    "correta": 1,
    "dica": "O trauma é o gatilho obrigatório para esse transtorno."
  },
  {
    "pergunta": "O que é o Transtorno Somatoforme?",
    "opcoes": [
      "Fingir doença para faltar ao trabalho.",
      "Somatização no corpo de um problema físico ou emocional.",
      "Dor de cabeça comum.",
      "Medo de altura."
    ],
    "correta": 1,
    "dica": "Quando a mente adoece e o corpo sente os sintomas físicos."
  },
  {
    "pergunta": "Ansiedade comum é considerada doença nas anotações?",
    "opcoes": [
      "Sim, sempre é doença.",
      "Não, Ansiedade não é doença, nem psicopatologia.",
      "Sim, é a doença mais grave.",
      "Depende do dia."
    ],
    "correta": 1,
    "dica": "A ansiedade é uma reação natural; ela vira doença quando vira TAG."
  },
  {
    "pergunta": "O que é TAG?",
    "opcoes": [
      "Transtorno de Ansiedade Generalizada.",
      "Técnica de Avaliação Geral.",
      "Tratamento de Apoio Geriátrico.",
      "Taxa de Ansiedade Global."
    ],
    "correta": 0,
    "dica": "É quando a ansiedade vira uma psicopatologia."
  },
  {
    "pergunta": "O que é a Síndrome de Burnout descrita nas notas?",
    "opcoes": [
      "Cansaço por exercícios físicos.",
      "Esgotamento emocional vindo do trabalho.",
      "Preguiça crônica.",
      "Falta de vitaminas."
    ],
    "correta": 1,
    "dica": "Está especificamente ligada ao ambiente profissional."
  },
  {
    "pergunta": "Sobre a Esquizofrenia, ela nasce com a pessoa ou desenvolve?",
    "opcoes": [
      "Nasce com ela.",
      "Pega-se como uma gripe.",
      "Não nasce, ela desenvolve (tem predisposição).",
      "É causada apenas por acidentes."
    ],
    "correta": 2,
    "dica": "Existem fatores de risco, mas a doença se manifesta ao longo da vida."
  },
  {
    "pergunta": "Qual a faixa etária comum para o surgimento da Esquizofrenia em homens?",
    "opcoes": [
      "10-15 anos.",
      "20-25 anos.",
      "40-50 anos.",
      "60-70 anos."
    ],
    "correta": 1,
    "dica": "Geralmente no início da vida adulta."
  },
  {
    "pergunta": "O que é Cognição?",
    "opcoes": [
      "Capacidade de sentir dor.",
      "Conjunto de habilidades mentais do ser humano.",
      "Capacidade de digerir alimentos.",
      "Habilidade de correr."
    ],
    "correta": 1,
    "dica": "Envolve pensamento, memória, aprendizado, etc."
  },
  {
    "pergunta": "Qual a característica principal da Depressão citada nas notas?",
    "opcoes": [
      "Apenas uma tristeza passageira.",
      "Doença psicológica, tristeza crônica, humor depressivo.",
      "Falta de vontade de comer apenas.",
      "Dor no corpo todo."
    ],
    "correta": 1,
    "dica": "Diferente da tristeza comum, é um estado crônico e patológico."
  },
  {
    "pergunta": "Para criar um tratamento para Bipolaridade, o que é necessário observar?",
    "opcoes": [
      "Apenas a medicação disponível.",
      "Se o paciente está no polo depressivo ou maníaco (energia).",
      "A idade do paciente apenas.",
      "A vontade da família."
    ],
    "correta": 1,
    "dica": "O tratamento deve ser específico para a 'energia' do momento (mania ou depressão)."
  },
  {
    "pergunta": "O que significa 'Comportamento de Risco' no contexto da mania (Bipolar)?",
    "opcoes": [
      "Praticar esportes radicais com segurança.",
      "Investir dinheiro com cautela.",
      "Agir impulsivamente sem medir consequências (gastos, sexo, velocidade).",
      "Ficar trancado em casa."
    ],
    "correta": 2,
    "dica": "A euforia tira a noção de perigo."
  },
  {
    "pergunta": "Na Esquizofrenia, quais fatores podem influenciar o desenvolvimento?",
    "opcoes": [
      "Apenas genética.",
      "Genética, traumas, problemas na gravidez.",
      "Apenas o ambiente de trabalho.",
      "Não existem fatores conhecidos."
    ],
    "correta": 1,
    "dica": "É multifatorial, incluindo predisposição e eventos externos."
  },
  {
    "pergunta": "O que significa 'Delírio é uma falsa certeza'?",
    "opcoes": [
      "Que o paciente está mentindo.",
      "Que o paciente acredita plenamente em algo que não é real.",
      "Que o paciente tem dúvidas sobre a realidade.",
      "Que o paciente está sonhando."
    ],
    "correta": 1,
    "dica": "Para o paciente, aquilo é uma verdade absoluta, mesmo que ilógica."
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

