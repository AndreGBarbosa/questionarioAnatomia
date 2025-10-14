const perguntas = [
  {
    "pergunta": "O que é Saúde Coletiva?",
    "opcoes": ["Estudo apenas de doenças", "Cuidado individual com o paciente", "Conjunto de ações voltadas à promoção e prevenção da saúde da população", "Apenas tratamento hospitalar"],
    "correta": 2,
    "dica": "A Saúde Coletiva busca promover, prevenir e recuperar a saúde de grupos e comunidades inteiras."
  },
  {
    "pergunta": "O que estabelece a Portaria nº 648 de 28 de março de 2006?",
    "opcoes": ["Criação do SUS", "Implantação da Política Nacional de Atenção Básica (PNAB)", "Normas sobre vacinas", "Regras para hospitais privados"],
    "correta": 1,
    "dica": "Essa portaria define diretrizes e a organização da Atenção Básica, incluindo o funcionamento das equipes de Saúde da Família."
  },
  {
    "pergunta": "O que é a Atenção Básica de Saúde?",
    "opcoes": ["Atendimento hospitalar", "Primeiro contato e acompanhamento contínuo da população", "Atendimento de urgência", "Ações de vigilância sanitária"],
    "correta": 1,
    "dica": "A Atenção Básica é o primeiro nível de atenção do SUS, focado na prevenção e promoção da saúde."
  },
  {
    "pergunta": "Quantos profissionais compõem uma equipe mínima do PSF?",
    "opcoes": ["1 médico e 1 enfermeiro", "1 médico, 1 enfermeiro, 1 técnico ou auxiliar de enfermagem e 4 a 6 ACS", "Apenas agentes comunitários", "1 médico e 2 técnicos"],
    "correta": 1,
    "dica": "Cada equipe do PSF deve ser multiprofissional para garantir atendimento integral à comunidade."
  },
  {
    "pergunta": "O que significa PSF?",
    "opcoes": ["Programa Saúde da Família", "Plano de Saúde Familiar", "Posto de Saúde Federal", "Projeto Social de Fisioterapia"],
    "correta": 0,
    "dica": "O PSF foi criado para aproximar o atendimento médico das famílias, dentro da comunidade."
  },
  {
    "pergunta": "Para que serve o calendário de vacinação?",
    "opcoes": ["Registrar apenas nascimentos", "Controlar o uso de medicamentos", "Indicar as vacinas e idades corretas para aplicação", "Acompanhar doenças crônicas"],
    "correta": 2,
    "dica": "O calendário orienta quais vacinas devem ser aplicadas em cada fase da vida, prevenindo doenças."
  },
  {
    "pergunta": "A vacina BCG previne qual doença?",
    "opcoes": ["Sarampo", "Tuberculose", "Poliomielite", "Hepatite B"],
    "correta": 1,
    "dica": "A vacina BCG protege contra formas graves da tuberculose, especialmente a meningite tuberculosa."
  },
  {
    "pergunta": "A vacina contra Hepatite B previne qual tipo de doença?",
    "opcoes": ["Doença pulmonar", "Infecção viral que afeta o fígado", "Infecção bacteriana", "Doença cardíaca"],
    "correta": 1,
    "dica": "A Hepatite B é uma infecção viral transmitida pelo sangue e secreções corporais que afeta o fígado."
  },
  {
    "pergunta": "A vacina tríplice viral previne quais doenças?",
    "opcoes": ["Tétano, difteria e coqueluche", "Sarampo, caxumba e rubéola", "Hepatite, poliomielite e HPV", "Tuberculose, febre amarela e dengue"],
    "correta": 1,
    "dica": "A tríplice viral protege contra três doenças altamente contagiosas: sarampo, caxumba e rubéola."
  },
  {
    "pergunta": "A vacina DTP protege contra:",
    "opcoes": ["Dengue, tétano e poliomielite", "Difteria, tétano e coqueluche", "Hepatite A, B e C", "HPV, sarampo e rubéola"],
    "correta": 1,
    "dica": "A DTP é essencial para prevenir doenças respiratórias e infecciosas graves em crianças."
  },
  {
    "pergunta": "A vacina HPV é indicada principalmente para:",
    "opcoes": ["Prevenir hepatite C", "Prevenir infecção por Papilomavírus Humano", "Prevenir gripe", "Prevenir tétano"],
    "correta": 1,
    "dica": "A vacina HPV previne câncer de colo de útero e outras infecções genitais causadas pelo vírus HPV."
  },
  {
    "pergunta": "Qual a via correta para aplicar a vacina BCG?",
    "opcoes": ["Intramuscular", "Intradérmica", "Subcutânea", "Oral"],
    "correta": 1,
    "dica": "A BCG é aplicada intradermicamente, geralmente no braço direito, formando pápula."
  },
  {
    "pergunta": "A via intramuscular deve ser aplicada em qual local?",
    "opcoes": ["Camada subcutânea", "Músculo (como deltóide ou vasto lateral)", "Veia", "Epiderme"],
    "correta": 1,
    "dica": "A via intramuscular injeta o medicamento diretamente no músculo para absorção mais rápida."
  },
  {
    "pergunta": "A via subcutânea é aplicada em qual região do corpo?",
    "opcoes": ["Veia", "Músculo", "Camada de gordura abaixo da pele", "Epiderme"],
    "correta": 2,
    "dica": "A aplicação subcutânea é feita no tecido adiposo, como no braço, abdômen ou coxa."
  },
  {
    "pergunta": "Qual via é usada para administração de soro?",
    "opcoes": ["Oral", "Intravenosa", "Subcutânea", "Intradérmica"],
    "correta": 1,
    "dica": "O soro é administrado diretamente na veia para efeito rápido."
  },
  {
    "pergunta": "Qual tubo de coleta contém EDTA e é usado para exames hematológicos?",
    "opcoes": ["Verde", "Roxo", "Cinza", "Vermelho"],
    "correta": 1,
    "dica": "O EDTA impede a coagulação do sangue, sendo usado em hemogramas."
  },
  {
    "pergunta": "Qual tubo de coleta é usado para glicose?",
    "opcoes": ["Roxo", "Cinza com fluoreto", "Verde com heparina", "Azul com citrato"],
    "correta": 1,
    "dica": "O fluoreto preserva a glicose e impede a fermentação do açúcar no sangue."
  },
  {
    "pergunta": "Qual tubo usa heparina como anticoagulante?",
    "opcoes": ["Verde", "Roxo", "Azul", "Cinza"],
    "correta": 0,
    "dica": "A heparina evita a coagulação, sendo usada para exames bioquímicos e gasometria."
  },
  {
    "pergunta": "As DSTs são causadas por:",
    "opcoes": ["Deficiência nutricional", "Micro-organismos transmitidos por contato sexual", "Problemas genéticos", "Fatores ambientais"],
    "correta": 1,
    "dica": "As DSTs são transmitidas por vírus, bactérias ou fungos durante o contato sexual sem proteção."
  },
  {
    "pergunta": "Um exemplo de DST viral é:",
    "opcoes": ["Sífilis", "Gonorreia", "Hepatite B", "Candidíase"],
    "correta": 2,
    "dica": "A Hepatite B é uma DST viral que pode causar inflamação do fígado."
  },
  {
    "pergunta": "Quais são os parâmetros normais da pressão arterial em um adulto?",
    "opcoes": ["160x110 mmHg", "120x80 mmHg", "100x60 mmHg", "140x100 mmHg"],
    "correta": 1,
    "dica": "Valores normais giram em torno de 120x80 mmHg. Acima de 140x90 é considerado hipertensão."
  },
  {
    "pergunta": "Qual a temperatura corporal considerada normal?",
    "opcoes": ["34°C", "35°C", "36°C a 37,4°C", "38°C"],
    "correta": 2,
    "dica": "A temperatura corporal normal varia entre 36°C e 37,4°C."
  },
  {
    "pergunta": "Qual frequência cardíaca é normal em um adulto em repouso?",
    "opcoes": ["30 a 50 bpm", "60 a 100 bpm", "100 a 140 bpm", "40 a 60 bpm"],
    "correta": 1,
    "dica": "Batimentos entre 60 e 100 bpm são considerados normais em adultos."
  },
  {
    "pergunta": "Qual frequência respiratória é considerada normal em adultos?",
    "opcoes": ["6 a 10 irpm", "12 a 20 irpm", "22 a 30 irpm", "30 a 40 irpm"],
    "correta": 1,
    "dica": "Respirações entre 12 e 20 por minuto são consideradas normais."
  },
  {
    "pergunta": "Qual é o principal sintoma de febre?",
    "opcoes": ["Temperatura acima de 37,8°C", "Pressão baixa", "Respiração lenta", "Sudorese fria"],
    "correta": 0,
    "dica": "A febre é um aumento da temperatura corporal acima de 37,8°C."
  },
  {
    "pergunta": "Quais os principais sintomas da Hepatite?",
    "opcoes": ["Dor de cabeça e febre", "Icterícia, urina escura e fadiga", "Tosse e dor de garganta", "Dor lombar e inchaço"],
    "correta": 1,
    "dica": "A Hepatite afeta o fígado e causa coloração amarelada da pele e olhos."
  },
  {
    "pergunta": "Como ocorre a transmissão da Hepatite B?",
    "opcoes": ["Pelo ar", "Por sangue contaminado e relações sexuais desprotegidas", "Por alimentos", "Por picada de inseto"],
    "correta": 1,
    "dica": "A Hepatite B é transmitida por fluidos corporais e sangue contaminado."
  },
  {
    "pergunta": "Qual exame detecta câncer de mama?",
    "opcoes": ["Eletrocardiograma", "Mamografia", "CA-125", "Ultrassonografia renal"],
    "correta": 1,
    "dica": "A mamografia é o exame de rastreio mais indicado para detectar o câncer de mama."
  },
  {
    "pergunta": "Qual exame detecta o marcador CA-125?",
    "opcoes": ["Câncer de mama", "Câncer de ovário", "Câncer de pulmão", "Câncer de pele"],
    "correta": 1,
    "dica": "O marcador CA-125 é usado para detecção e acompanhamento do câncer de ovário."
  },
  {
    "pergunta": "O que é discutido nas Conferências Nacionais de Saúde?",
    "opcoes": ["Políticas públicas e diretrizes do SUS", "Assuntos de economia", "Formação médica", "Planos privados"],
    "correta": 0,
    "dica": "As Conferências definem metas e prioridades das políticas públicas de saúde."
  },
  {
    "pergunta": "O Programa HAS+DI visa o controle de quais doenças?",
    "opcoes": ["Hipertensão e Diabetes", "Tuberculose e Hanseníase", "Hepatites e DSTs", "Câncer e Depressão"],
    "correta": 0,
    "dica": "HAS+DI foca no acompanhamento contínuo de hipertensos e diabéticos."
  },
  {
    "pergunta": "O que é retinopatia diabética?",
    "opcoes": ["Doença infecciosa ocular", "Lesão nos vasos da retina causada pelo diabetes", "Alergia nos olhos", "Tumor ocular"],
    "correta": 1,
    "dica": "A glicose alta danifica vasos da retina, podendo causar cegueira."
  },
  {
    "pergunta": "O que é úlcera do pé diabético?",
    "opcoes": ["Ferida causada por infecção viral", "Lesão nos pés por má circulação e neuropatia", "Ferimento esportivo", "Corte acidental"],
    "correta": 1,
    "dica": "Surge devido à falta de sensibilidade e circulação em diabéticos."
  },
  {
    "pergunta": "O que é ateroma?",
    "opcoes": ["Placa de gordura nas artérias", "Lesão muscular", "Tumor benigno", "Infecção sanguínea"],
    "correta": 0,
    "dica": "O ateroma é o acúmulo de gordura que leva à obstrução arterial."
  },
  {
    "pergunta": "O que caracteriza a arteriosclerose?",
    "opcoes": ["Artéria rígida e espessa", "Artéria fina e flexível", "Dilatação venosa", "Trombose arterial"],
    "correta": 0,
    "dica": "A arteriosclerose é o endurecimento das artérias, dificultando o fluxo de sangue."
  },
  {
    "pergunta": "Qual exame avalia o colesterol e risco de ateroma?",
    "opcoes": ["Hemograma", "Lipidograma", "Glicemia", "Eletrocardiograma"],
    "correta": 1,
    "dica": "O lipidograma mede colesterol e triglicerídeos, avaliando o risco cardiovascular."
  },
  {
    "pergunta": "Como ocorre a transmissão da Hepatite C?",
    "opcoes": ["Água contaminada", "Sangue contaminado e objetos perfurocortantes", "Ar contaminado", "Relação sexual oral"],
    "correta": 1,
    "dica": "Transfusão e uso de agulhas compartilhadas são principais meios de contágio."
  },
  {
    "pergunta": "Qual cor identifica o recipiente para materiais perfurocortantes?",
    "opcoes": ["Branco", "Amarelo ou vermelho", "Azul", "Verde"],
    "correta": 1,
    "dica": "Os recipientes vermelhos ou amarelos indicam risco biológico perfurocortante."
  },
  {
    "pergunta": "O recipiente branco é usado para:",
    "opcoes": ["Resíduos recicláveis", "Resíduos infectantes", "Resíduos comuns", "Restos alimentares"],
    "correta": 1,
    "dica": "Recipiente branco é destinado a resíduos infectantes, como gazes e curativos."
  },
  {
    "pergunta": "O tubo azul contém qual anticoagulante?",
    "opcoes": ["EDTA", "Citrato de sódio", "Heparina", "Fluoreto"],
    "correta": 1,
    "dica": "O citrato é usado em exames de coagulação como o TP e TTPA."
  },
  {
    "pergunta": "Qual é o órgão responsável por coordenar o SUS?",
    "opcoes": ["ANS", "Ministério da Saúde", "Prefeituras", "Conselhos Regionais"],
    "correta": 1,
    "dica": "O Ministério da Saúde coordena e define as políticas nacionais do SUS."
  },
  {
    "pergunta": "O que significa SUS?",
    "opcoes": ["Sistema Único de Saúde", "Serviço Universal de Saúde", "Sociedade Unificada de Saúde", "Sistema Unificado Social"],
    "correta": 0,
    "dica": "O SUS garante acesso universal e gratuito à saúde no Brasil."
  },
  {
    "pergunta": "Qual o nome da conferência que originou o SUS?",
    "opcoes": ["VIII Conferência Nacional de Saúde", "I Conferência de Saúde Pública", "Conferência Panamericana", "X Conferência de Saúde"],
    "correta": 0,
    "dica": "A VIII Conferência Nacional de Saúde de 1986 foi a base para criação do SUS."
  },
  {
    "pergunta": "O que são macro e microlesões?",
    "opcoes": ["Feridas grandes e pequenas causadas por pressão ou atrito", "Infecções respiratórias", "Cortes cirúrgicos", "Lesões ósseas"],
    "correta": 0,
    "dica": "Feridas cutâneas provocadas por esforço, pressão ou atrito na pele."
  },
  {
    "pergunta": "Qual é o valor de pressão considerado hipertensão estágio 1?",
    "opcoes": ["100x70 mmHg", "120x80 mmHg", "140x90 mmHg", "160x110 mmHg"],
    "correta": 2,
    "dica": "Pressão arterial igual ou acima de 140x90 mmHg indica hipertensão leve."
  },
  {
    "pergunta": "Qual exame detecta diabetes?",
    "opcoes": ["Lipidograma", "Glicemia em jejum", "Hemograma", "Urina tipo I"],
    "correta": 1,
    "dica": "A glicemia mede o nível de glicose no sangue, detectando diabetes."
  },
  {
    "pergunta": "O que é o exame hemograma?",
    "opcoes": ["Avalia função renal", "Avalia células do sangue (hemácias, leucócitos e plaquetas)", "Avalia função hepática", "Mede colesterol"],
    "correta": 1,
    "dica": "É o exame mais comum para avaliar a saúde geral e detectar infecções."
  },
  {
    "pergunta": "O que é anemia?",
    "opcoes": ["Excesso de glóbulos vermelhos", "Deficiência de hemoglobina ou hemácias", "Excesso de glicose", "Infecção viral"],
    "correta": 1,
    "dica": "A anemia é a falta de hemoglobina, causando cansaço e palidez."
  },
  {
    "pergunta": "O que caracteriza a hipertensão arterial?",
    "opcoes": ["Pressão abaixo de 100x60 mmHg", "Pressão acima de 140x90 mmHg", "Febre constante", "Alteração de glicose"],
    "correta": 1,
    "dica": "A hipertensão é a elevação persistente da pressão arterial."
  },
  {
    "pergunta": "O que significa ACS?",
    "opcoes": ["Agente Comunitário de Saúde", "Atendimento Clínico Simplificado", "Assistente de Cuidados Sanitários", "Agente Clínico Social"],
    "correta": 0,
    "dica": "Os ACS são responsáveis por visitar famílias e promover ações de prevenção em saúde."
  },
  {
    "pergunta": "Qual é o principal objetivo do PSF?",
    "opcoes": ["Atendimento apenas emergencial", "Aproximar o serviço de saúde das famílias e prevenir doenças", "Atendimento hospitalar", "Foco em cirurgias"],
    "correta": 1,
    "dica": "O PSF atua na prevenção e acompanhamento contínuo da comunidade."
  },
  {
    "pergunta": "Qual o nome do exame que mede a glicose média dos últimos 3 meses?",
    "opcoes": ["Glicemia em jejum", "Hemoglobina glicada (HbA1c)", "Insulina sérica", "Curva glicêmica"],
    "correta": 1,
    "dica": "A hemoglobina glicada mostra o controle da glicose a longo prazo."
  },
  {
    "pergunta": "O que é vigilância epidemiológica?",
    "opcoes": ["Controle de epidemias e doenças na população", "Atendimento hospitalar", "Fiscalização de alimentos", "Análise ambiental"],
    "correta": 0,
    "dica": "Monitora, detecta e investiga surtos e epidemias."
  },
  {
    "pergunta": "Qual o símbolo internacional de risco biológico?",
    "opcoes": ["Triângulo verde", "Círculo azul", "Trevo preto em fundo amarelo", "Quadrado vermelho"],
    "correta": 2,
    "dica": "O símbolo indica materiais potencialmente infectantes."
  },
  {
    "pergunta": "Qual EPI é essencial para aplicação de vacinas?",
    "opcoes": ["Capacete", "Luvas e máscara", "Sapato de segurança", "Jaleco térmico"],
    "correta": 1,
    "dica": "O uso de luvas e máscara protege o profissional e o paciente."
  },
  {
    "pergunta": "A febre amarela é transmitida por qual vetor?",
    "opcoes": ["Aedes aegypti", "Culex", "Anopheles", "Triatoma infestans"],
    "correta": 0,
    "dica": "O mesmo mosquito da dengue transmite a febre amarela urbana."
  },
  {
    "pergunta": "A vacina antitetânica é aplicada por qual via?",
    "opcoes": ["Intradérmica", "Intramuscular", "Subcutânea", "Oral"],
    "correta": 1,
    "dica": "Aplicada por via intramuscular, geralmente no deltoide."
  },
  {
    "pergunta": "O exame Papanicolau detecta:",
    "opcoes": ["Câncer de colo de útero", "Câncer de mama", "Infecção urinária", "Hepatite"],
    "correta": 0,
    "dica": "É o principal exame preventivo do câncer do colo do útero."
  },
  {
    "pergunta": "A coleta de sangue venoso deve ser feita com:",
    "opcoes": ["Material reutilizável", "Material estéril e descartável", "Equipamento doméstico", "Sem luvas"],
    "correta": 1,
    "dica": "Segurança e higiene são essenciais na coleta venosa."
  },
  {
    "pergunta": "O que é profilaxia?",
    "opcoes": ["Tratamento curativo", "Ação de prevenção de doenças", "Diagnóstico laboratorial", "Reabilitação"],
    "correta": 1,
    "dica": "Profilaxia é qualquer medida preventiva para evitar doenças."
  },
  {
    "pergunta": "O que é imunização?",
    "opcoes": ["Administração de medicamentos", "Indução de resposta imune por vacinas", "Coleta de sangue", "Controle de epidemias"],
    "correta": 1,
    "dica": "A imunização estimula o corpo a produzir anticorpos contra doenças específicas."
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

