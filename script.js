const perguntas = [
  // --- PARTE 1: ENFERMAGEM E GASTROENTEROLOGIA ---
  {
    "pergunta": "Para a enfermagem, qual o atributo mais precioso?",
    "opcoes": [
      "A cura imediata.",
      "O Cuidado.",
      "O diagnóstico médico.",
      "A administração hospitalar."
    ],
    "correta": 1,
    "dica": "Não se pauta somente nos sinais clínicos, mas na totalidade do ser humano."
  },
  {
    "pergunta": "É a parte integrante de uma organização médica e social... de caráter curativo quanto preventivo. Quem sou eu?",
    "opcoes": [
      "Posto de Saúde.",
      "Hospital.",
      "Clínica de Estética.",
      "Farmácia."
    ],
    "correta": 1,
    "dica": "Atende sob qualquer regime, inclusive o domiciliar."
  },
  {
    "pergunta": "Qual a classificação dos Hospitais quanto à edificação?",
    "opcoes": [
      "Pequeno, Médio e Grande.",
      "Vertical e Horizontal.",
      "Pavilhonar, Multibloco, Misto.",
      "Aberto e Fechado."
    ],
    "correta": 2,
    "dica": "Refere-se ao estilo da construção dos prédios."
  },
  {
    "pergunta": "Qual a classificação dos Hospitais quanto à disposição da construção em blocos?",
    "opcoes": [
      "Vertical e Horizontal.",
      "Pavilhonar e Misto.",
      "Geral e Especializado.",
      "Público e Privado."
    ],
    "correta": 0,
    "dica": "Refere-se a como os blocos são distribuídos no terreno ou em altura."
  },
  {
    "pergunta": "Qual a classificação dos Hospitais quanto ao tamanho em relação ao número de leitos (Grande porte)?",
    "opcoes": [
      "Entre 25 e 49 leitos.",
      "Entre 50 e 149 leitos.",
      "Entre 150 e 500 leitos.",
      "Mais de 500 leitos."
    ],
    "correta": 2,
    "dica": "Médio vai até 149, e o Extra é acima de 500."
  },
  {
    "pergunta": "Qual a classificação dos Hospitais quanto à função?",
    "opcoes": [
      "Restaurativa, Preventiva, Ensino educação e pesquisa.",
      "Lucrativa e Filantrópica.",
      "Aguda e Crônica.",
      "Pública e Privada."
    ],
    "correta": 0,
    "dica": "Envolve desde curar até ensinar novos profissionais."
  },
  {
    "pergunta": "Qual a classificação dos Hospitais quanto à propriedade, manutenção e controle?",
    "opcoes": [
      "Oficiais de Governo e Não oficiais ou particulares.",
      "Verticais e Horizontais.",
      "Gerais e Especializados.",
      "Abertos e Fechados."
    ],
    "correta": 0,
    "dica": "Define quem é o dono ou quem mantém o hospital."
  },
  {
    "pergunta": "Qual a classificação dos Hospitais quanto ao atendimento?",
    "opcoes": [
      "Hospital Geral e Hospital Especializado.",
      "Hospital Vertical e Horizontal.",
      "Hospital de Ensino e Pesquisa.",
      "Hospital Público e Privado."
    ],
    "correta": 0,
    "dica": "Define se atende todas as patologias ou apenas uma área específica."
  },
  {
    "pergunta": "Qual a classificação dos Hospitais quanto ao corpo clínico?",
    "opcoes": [
      "Interno e Externo.",
      "Fechada e Aberta.",
      "Residente e Visitante.",
      "Fixo e Rotativo."
    ],
    "correta": 1,
    "dica": "Refere-se à permissão para médicos atuarem na instituição."
  },
  {
    "pergunta": "A saúde deve ser entendida em sentido mais amplo... Do que se trata o texto (sobre direito social e qualidade de vida)?",
    "opcoes": [
      "Processo Saúde Doença.",
      "Sistema Único de Saúde.",
      "Constituição Federal.",
      "Regimento Interno Hospitalar."
    ],
    "correta": 0,
    "dica": "Não é um bem de troca, mas um bem comum."
  },
  {
    "pergunta": "É a inflamação da mucosa gástrica, quem sou eu?",
    "opcoes": [
      "Úlcera.",
      "Gastrite.",
      "Esofagite.",
      "Duodenite."
    ],
    "correta": 1,
    "dica": "Afeta a parede interna do estômago."
  },
  {
    "pergunta": "É um processo que varia por horas ou alguns dias. Está relacionada com imprudência dietética e uso excessivo de AINES. Quem sou eu?",
    "opcoes": [
      "Gastrite crônica.",
      "Úlcera gástrica.",
      "Gastrite aguda.",
      "Refluxo."
    ],
    "correta": 2,
    "dica": "É temporária e muitas vezes ligada à alimentação ou álcool."
  },
  {
    "pergunta": "É uma inflamação prolongada do estômago que pode estar relacionada com a bactéria Helicobacter pylori. Quem sou eu?",
    "opcoes": [
      "Gastrite aguda.",
      "Gastrite crônica.",
      "Câncer gástrico.",
      "Hérnia de hiato."
    ],
    "correta": 1,
    "dica": "É persistente e envolve uma bactéria específica."
  },
  {
    "pergunta": "É um defeito escavado da mucosa gastrointestinal... decorrente da ação de secreção ácido-péptica. Quem sou eu?",
    "opcoes": [
      "Gastrite.",
      "Úlceras.",
      "Tumor.",
      "Fissura."
    ],
    "correta": 1,
    "dica": "Forma uma 'escavação' ou ferida na parede do órgão."
  },
  {
    "pergunta": "Paciente apresenta: hipersecreção de HCL, dor 2-3 horas depois da refeição, ingestão de alimentos alivia a dor. Quem sou eu?",
    "opcoes": [
      "Úlcera gástrica.",
      "Úlcera duodenal.",
      "Refluxo gastroesofágico.",
      "Gastrite nervosa."
    ],
    "correta": 1,
    "dica": "A dor melhora quando se come; vômito é incomum."
  },
  {
    "pergunta": "Paciente apresenta: hiposecreção de HCL, dor 30' - 1 h depois da refeição, vômito pode aliviar a dor. Quem sou eu?",
    "opcoes": [
      "Úlcera duodenal.",
      "Úlcera gástrica.",
      "Pancreatite.",
      "Colite."
    ],
    "correta": 1,
    "dica": "Comer causa dor logo em seguida; vômito é comum."
  },
  {
    "pergunta": "Doença diarreica de início abrupto... relacionada com as condições precárias de higiene. Quem sou eu?",
    "opcoes": [
      "Gastroenterocolite aguda.",
      "Apendicite.",
      "Diverticulite.",
      "Úlcera péptica."
    ],
    "correta": 0,
    "dica": "Inflamação aguda do estômago e intestino."
  },
  {
    "pergunta": "O aumento da frequência ou diminuição da consistência das fezes (>3 evacuações aquosas em 24horas). Quem sou eu?",
    "opcoes": [
      "Constipação.",
      "Diarreia.",
      "Vômito.",
      "Dispepsia."
    ],
    "correta": 1,
    "dica": "Pode ser aguda, persistente ou crônica."
  },
  {
    "pergunta": "É também conhecida como 'hepatite infecciosa'... via de contágio é a fecal-oral. Quem sou eu?",
    "opcoes": [
      "Hepatite A.",
      "Hepatite B.",
      "Hepatite C.",
      "Hepatite D."
    ],
    "correta": 0,
    "dica": "Causada por um vírus RNA da família Picornaviridae."
  },
  {
    "pergunta": "É altamente infectivo e facilmente transmitido através da via sexual, transfusões e verticalmente (mãe-filho). Quem sou eu?",
    "opcoes": [
      "Hepatite A.",
      "Hepatite B.",
      "Hepatite E.",
      "Gastrite Viral."
    ],
    "correta": 1,
    "dica": "Associada a acidentes perfurocortantes e compartilhamento de lâminas."
  },
  {
    "pergunta": "A transmissão ocorre principalmente por via parenteral (transfusão antes de 1993, drogas injetáveis). Quem sou eu?",
    "opcoes": [
      "Hepatite A.",
      "Hepatite B.",
      "Hepatite C.",
      "Hepatite E."
    ],
    "correta": 2,
    "dica": "A transmissão sexual é menos comum que na B, e intrauterina é incomum."
  },
  {
    "pergunta": "É um vírus defectivo (incompleto)... necessita da presença do vírus da hepatite B. Quem sou eu?",
    "opcoes": [
      "Hepatite A.",
      "Hepatite C.",
      "Hepatite D.",
      "Hepatite E."
    ],
    "correta": 2,
    "dica": "Só consegue se replicar se o paciente já tiver Hepatite B."
  },
  {
    "pergunta": "Possibilidade de que esta infecção seja uma zoonose (suínos, roedores). Quem sou eu?",
    "opcoes": [
      "Hepatite B.",
      "Hepatite C.",
      "Hepatite D.",
      "Hepatite E."
    ],
    "correta": 3,
    "dica": "Relatos de isolamento do vírus em animais."
  },
  {
    "pergunta": "É inflamação podendo ser aguda ou crônica... num órgão que produz insulina e enzimas digestivas. Quem sou eu?",
    "opcoes": [
      "Hepatite.",
      "Pancreatite.",
      "Colecisitite.",
      "Apencidite."
    ],
    "correta": 1,
    "dica": "O órgão afetado é o pâncreas."
  },
  {
    "pergunta": "É uma doença difusa, morte celular e produção de tecido fibroso não funcionante no fígado. Quem sou eu?",
    "opcoes": [
      "Esteatose.",
      "Cirrose hepática.",
      "Hepatite aguda.",
      "Cisto hepático."
    ],
    "correta": 1,
    "dica": "Prejudica a estrutura e função do órgão de forma grave."
  },
  {
    "pergunta": "Causada mais frequentemente por alcoolismo crônico e constitui o tipo mais comum da doença. Quem sou eu?",
    "opcoes": [
      "Cirrose biliar.",
      "Cirrose alcoólica.",
      "Cirrose pós-necrótica.",
      "Esteatose leve."
    ],
    "correta": 1,
    "dica": "O nome deriva diretamente da causa (álcool)."
  },
  {
    "pergunta": "Quais os estágios de danos no fígado, na ordem correta?",
    "opcoes": [
      "Cirrose -> Fibrose -> Esteatose.",
      "Esteatose -> Fibrose -> Cirrose -> Câncer hepático.",
      "Câncer -> Cirrose -> Esteatose.",
      "Fibrose -> Esteatose -> Cirrose."
    ],
    "correta": 1,
    "dica": "Começa com gordura, vira cicatriz, endurece e pode virar câncer."
  },
  {
    "pergunta": "É o ressecamento das fezes no intestino grosso associada a movimentos lentos. Quem sou eu?",
    "opcoes": [
      "Diarreia.",
      "Constipação.",
      "Gastroenterite.",
      "Disenteria."
    ],
    "correta": 1,
    "dica": "Também conhecida como prisão de ventre."
  },
  {
    "pergunta": "Causada por um protozoário... fezes com manchas de sangue, transportado por água ou comida contaminada. Quem sou eu?",
    "opcoes": [
      "Amebíase.",
      "Giardíase.",
      "Virose.",
      "Intolerância à lactose."
    ],
    "correta": 0,
    "dica": "Pode causar disenteria amebiana."
  },
  {
    "pergunta": "Sintomas variam de dor estomacal à diarreia persistente... eructação (arroto) e fadiga. Quem sou eu?",
    "opcoes": [
      "Amebíase.",
      "Giardíase.",
      "Hepatite.",
      "Gastrite."
    ],
    "correta": 1,
    "dica": "Causada por um protozoário (Giardia lamblia)."
  },
  {
    "pergunta": "Algumas pessoas não conseguem digerir o açúcar encontrado no leite. Quem sou eu?",
    "opcoes": [
      "Alergia à proteína do leite.",
      "Intolerância à lactose.",
      "Gastrite.",
      "Úlcera."
    ],
    "correta": 1,
    "dica": "Falta a enzima lactase."
  },
  {
    "pergunta": "É uma doença em que células malignas são encontradas nos tecidos do estômago. Quem sou eu?",
    "opcoes": [
      "Úlcera gástrica.",
      "Gastrite atrófica.",
      "Câncer gástrico.",
      "Pólipo benigno."
    ],
    "correta": 2,
    "dica": "Inclui adenocarcinoma, linfoma e leiomiossarcoma."
  },
  {
    "pergunta": "Qual significado de SAE?",
    "opcoes": [
      "Serviço de Atendimento Especializado.",
      "Sistematização da Assistência de Enfermagem.",
      "Sistema de Apoio à Enfermagem.",
      "Sociedade Anônima de Enfermagem."
    ],
    "correta": 1,
    "dica": "É o método que organiza o trabalho do enfermeiro."
  },
  {
    "pergunta": "Quais as fases da SAE?",
    "opcoes": [
      "Consulta, Remédio, Alta.",
      "Coleta de dados, Diagnóstico, Planejamento, Implementação, Avaliação.",
      "Triagem, Médico, Enfermagem.",
      "Admissão, Cirurgia, Pós-operatório."
    ],
    "correta": 1,
    "dica": "Começa coletando dados e termina avaliando os resultados."
  },

  // --- PARTE 2: SISTEMA URINÁRIO E REUMATOLOGIA ---
  {
    "pergunta": "Produz, armazena e elimina a urina; Mantém a homeostase. Quem sou eu?",
    "opcoes": [
      "Sistema Digestório.",
      "Sistema Urinário.",
      "Sistema Circulatório.",
      "Sistema Respiratório."
    ],
    "correta": 1,
    "dica": "Responsável por filtrar o sangue e controlar o pH."
  },
  {
    "pergunta": "É um órgão com o formato de feijão; filtram o sangue. Quem sou eu?",
    "opcoes": [
      "Fígado.",
      "Pâncreas.",
      "Rins.",
      "Bexiga."
    ],
    "correta": 2,
    "dica": "Temos dois e têm o tamanho de uma mão fechada."
  },
  {
    "pergunta": "São dois tubos que transportam a urina dos rins para a bexiga. Quem sou eu?",
    "opcoes": [
      "Uretra.",
      "Ureteres.",
      "Veias Renais.",
      "Trompas."
    ],
    "correta": 1,
    "dica": "Fazem movimentos peristálticos para mover a urina."
  },
  {
    "pergunta": "Sou um músculo elástico e tenho a função de armazenar temporariamente a urina. Quem sou eu?",
    "opcoes": [
      "Rim.",
      "Uretra.",
      "Bexiga.",
      "Próstata."
    ],
    "correta": 2,
    "dica": "Esvazia-se durante a micção."
  },
  {
    "pergunta": "É o resultado de um processo inflamatório difuso dos glomérulos renais (base imunológica). Quem sou eu?",
    "opcoes": [
      "Cistite.",
      "Glomerulonefrite Difusa Aguda (Nefrite).",
      "Cálculo Renal.",
      "Prostatite."
    ],
    "correta": 1,
    "dica": "Ocorre devido a complexos antígeno-anticorpo."
  },
  {
    "pergunta": "Infecção bacteriana grave dos rins (bactérias sobem da bexiga). Quem sou eu?",
    "opcoes": [
      "Cistite.",
      "Uretrite.",
      "Pielonefrite.",
      "Nefrolitíase."
    ],
    "correta": 2,
    "dica": "Sintomas incluem febre, calafrios e dor lombar."
  },
  {
    "pergunta": "É a presença de cálculos ou cristais no sistema urinário. Quem sou eu?",
    "opcoes": [
      "Litíase Renal.",
      "Insuficiência Renal.",
      "Glomerulonefrite.",
      "Cistite."
    ],
    "correta": 0,
    "dica": "Popularmente conhecido como pedra nos rins."
  },
  {
    "pergunta": "Quando os rins deixam de filtrar ureia e substâncias indesejáveis. Quem sou eu?",
    "opcoes": [
      "Infecção Urinária.",
      "Insuficiência Renal Aguda.",
      "Incontinência Urinária.",
      "Hiperplasia Prostática."
    ],
    "correta": 1,
    "dica": "Ocorre diminuição do ritmo de filtração glomerular."
  },
  {
    "pergunta": "Tipo de IRA reversível se tratada a tempo (ex: choque, hemorragia). Quem sou eu?",
    "opcoes": [
      "IRA Pré-Renal ou Funcional.",
      "IRA Renal.",
      "IRA Pós-Renal.",
      "IRA Crônica."
    ],
    "correta": 0,
    "dica": "O problema está na circulação antes de chegar ao rim."
  },
  {
    "pergunta": "Tipo de IRA intrínseca, causada por lesão no parênquima (isquemia, nefrites). Quem sou eu?",
    "opcoes": [
      "IRA Pré-Renal.",
      "IRA Renal.",
      "IRA Pós-Renal.",
      "Litíase."
    ],
    "correta": 1,
    "dica": "O dano é no próprio tecido renal."
  },
  {
    "pergunta": "Ocorre quando há obstrução do sistema uroexcretor (ex: cálculo, tumor). Quem sou eu?",
    "opcoes": [
      "IRA Pré-Renal.",
      "IRA Renal.",
      "IRA Pós-Renal.",
      "Glomerulonefrite."
    ],
    "correta": 2,
    "dica": "Algo impede a saída da urina."
  },
  {
    "pergunta": "É um tipo de tratamento que visa repor as funções dos rins, retirando substâncias tóxicas. Quem sou eu?",
    "opcoes": [
      "Cirurgia.",
      "Diálise.",
      "Fisioterapia.",
      "Quimioterapia."
    ],
    "correta": 1,
    "dica": "Estabelece uma nova situação de equilíbrio."
  },
  {
    "pergunta": "Infusão de líquido na cavidade abdominal através de cateter (peritônio filtra). Quem sou eu?",
    "opcoes": [
      "Hemodiálise.",
      "Diálise Peritoneal.",
      "Cateterismo Vesical.",
      "Litotripsia."
    ],
    "correta": 1,
    "dica": "Usa a membrana do próprio corpo como filtro."
  },
  {
    "pergunta": "Promove a retirada de toxinas através da passagem do sangue por um filtro (máquina). Quem sou eu?",
    "opcoes": [
      "Diálise Peritoneal.",
      "Hemodiálise.",
      "Transplante.",
      "Drenagem."
    ],
    "correta": 1,
    "dica": "Realizada em clínicas, geralmente 3 vezes por semana."
  },
  {
    "pergunta": "É considerada o padrão ouro para acesso vascular em hemodiálise. Quem sou eu?",
    "opcoes": [
      "Cateter Venoso Central (CVC).",
      "Fístula Arteriovenosa (FAV).",
      "Acesso Periférico.",
      "Cateter de Foley."
    ],
    "correta": 1,
    "dica": "Tem maior durabilidade e menor risco de infecção."
  },
  {
    "pergunta": "Ausência ou produção de urina inferior a 100 ml/dia. Quem sou eu?",
    "opcoes": [
      "Poliúria.",
      "Anúria.",
      "Disúria.",
      "Oligúria."
    ],
    "correta": 1,
    "dica": "Produção quase nula de urina."
  },
  {
    "pergunta": "Presença de sangue na urina. Quem sou eu?",
    "opcoes": [
      "Piúria.",
      "Glicosúria.",
      "Hematúria.",
      "Colúria."
    ],
    "correta": 2,
    "dica": "O prefixo 'Hema' refere-se a sangue."
  },
  {
    "pergunta": "Degeneração das cartilagens que existem nas articulações (evitam contato osso-osso). Quem sou eu?",
    "opcoes": [
      "Osteoporose.",
      "Osteoartrose.",
      "Fibromialgia.",
      "Lúpus."
    ],
    "correta": 1,
    "dica": "Desgaste da cartilagem."
  },
  {
    "pergunta": "Doença caracterizada pela redução de massa óssea (perda de cálcio). Quem sou eu?",
    "opcoes": [
      "Osteoartrose.",
      "Osteoporose.",
      "Artrite.",
      "Gota."
    ],
    "correta": 1,
    "dica": "Comum em mulheres após a menopausa."
  },
  {
    "pergunta": "Doença inflamatória autoimune... o sistema imunológico ataca o revestimento da articulação. Quem sou eu?",
    "opcoes": [
      "Osteoartrite.",
      "Artrite Reumatoide.",
      "Fibromialgia.",
      "Gota."
    ],
    "correta": 1,
    "dica": "Causa deformidades e é sistêmica."
  },
  {
    "pergunta": "Doença caracterizada pela elevação de ácido úrico e depósito de cristais. Quem sou eu?",
    "opcoes": [
      "Artrite Reumatoide.",
      "Gota.",
      "Lúpus.",
      "Osteoporose."
    ],
    "correta": 1,
    "dica": "Causa dores agudas, frequentemente no dedo do pé."
  },
  {
    "pergunta": "Doença inflamatória crônica, autoimune, presença de autoanticorpos, 'asa de borboleta'. Quem sou eu?",
    "opcoes": [
      "Fibromialgia.",
      "Lúpus Eritematoso.",
      "Osteoporose.",
      "Gota."
    ],
    "correta": 1,
    "dica": "Acomete mais mulheres jovens e pode afetar vários órgãos."
  }
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

