const perguntas = [
    { pergunta: "O coração humano apresenta uma série de peculiaridades para que a circulação sanguínea se dê de forma eficiente. Assinale a opção que apresenta a afirmativa correta em relação a estas características.", opcoes: ["A musculatura mais espessa do ventrículo esquerdo é necessária para aumentar a pressão do sangue venoso.", "O sangue oxigenado nos pulmões entra no coração pela veia pulmonar, e o sangue rico em gás carbônico entra nos pulmões pela artéria pulmonar.", "As válvulas do coração têm por função permitir o refluxo do sangue para a cavidade anterior durante o processo de diástole.", "A separação das cavidades do coração impede o maior controle do volume sanguíneo."], correta: 1, dica: "A circulação sanguínea eficiente depende de como o sangue é bombeado nos pulmões!" },
   
    { pergunta: "Assinale a alternativa que contenha as regiões anatômicas do coração:", opcoes: ["Anterior e posterior", "Ápice e base", "Pulmonar e ápice", "Base e anterior"], correta: 1, dica: "Essas regiões são essenciais para a função do coração!" },
   
    { pergunta: "O coração está localizado em uma região que fica entre os dois pulmões. Assinale a alternativa que traz a informação sugerida no enunciado.", opcoes: ["Espaço Pleural", "Cavidade intratórica", "Recesso costodiafragmático", "Mediastino"], correta: 3, dica: "É o espaço entre os pulmões onde o coração se encontra!" },
   
    { pergunta: "As faces cardíacas são regiões do coração voltadas para outras estruturas anatômicas. Assinale a alternativa correta.", opcoes: ["As faces pulmonares estão exclusivamente situadas a posterior.", "A face esternocostal é posterior ao osso esterno e as cartilagens costais.", "A face esternocostal é anterior ao osso esterno e as cartilagens costais.", "A face diafragmática está apoiada no musculo intercostal interno."], correta: 1, dica: "Essa face está em contato com o esterno!" },
   
    { pergunta: "A camada muscular do coração é denominada:", opcoes: ["Endocárdio.", "Epicárdio.", "Pericárdio.", "Miocardio."], correta: 3, dica: "A principal camada muscular do coração!" },
   
    { pergunta: "O músculo cardíaco possui como característica diferencial a presença de:", opcoes: ["Estrias.", "Proteínas contráteis", "Sarcômeros.", "Discos intercalares."], correta: 3, dica: "Esses discos são fundamentais para a contração do coração!" },
   
    { pergunta: "A ______________ tem início no ventrículo direito, de onde o sangue venoso sai e vai em direção aos pulmões.", opcoes: ["Circulação sistêmica", "Circulação pulmonar", "Grande circulação.", "Circulação fetal."], correta: 1, dica: "Ela se refere à circulação nos pulmões!" },
   
    { pergunta: "As câmaras cardíacas envolvidas na circulação sistêmica são:", opcoes: ["Ventrículo esquerdo e átrio direito.", "Ventrículo direito e átrio esquerdo.", "Ventrículo esquerdo e átrio esquerdo.", "Ventrículo direito e átrio direito."], correta: 2, dica: "São as câmaras que bombeiam sangue para o corpo!" },
   
    { pergunta: "Assinale a alternativa que contenha a câmara cardíaca com seu respectivo vaso da base.", opcoes: ["Átrio direito – veias pulmonares", "Átrio esquerdo – veias cavas superior e inferior.", "Ventrículo direito – tronco pulmonar.r", "Ventrículo esquerdo – veia aorta."], correta: 2, dica: "O ventrículo direito está ligado ao tronco pulmonar!" },
   
    { pergunta: "A membrana que reveste externamente o coração e não apresenta tecido epitelial na sua constituição é o:", opcoes: ["Pericárdio seroso visceral.", "Pericárdio seroso parietal", "Pericárdio fibroso parietal", "Pericárdio fibroso"], correta: 3, dica: "É a membrana externa, feita de tecido fibroso!" },

    { pergunta: "Estrutura anatômica que impede o refluxo do sangue dos ventrículos para os átrios:", opcoes: ["Valva atrioventricular", "Valva arterial.", "Válvula venosa", "Valva ventriculoatrial"], correta: 0, dica: "Essas valvas controlam o fluxo sanguíneo entre átrios e ventrículos!" },

    { pergunta: "Sabe-se que as valvas são formadas por conjuntos de válvulas. As valvas arteriais são formadas por válvulas do tipo:", opcoes: ["Cúspide.", "Semilunar.", "Cartilaginosa.", "Fibrosa."], correta: 1, dica: "Essas válvulas estão nas artérias do coração!" },

    { pergunta: "É característica das artérias e constante ________ para que desta forma o sangue chegue às extremidades do corpo humano.", opcoes: ["Ramificação.", "Confluência.", "Junção.", "Obstrução."], correta: 0, dica: "O sangue é levado por ramificações das artérias!" },

    { pergunta: "A artéria aorta é dividida didaticamente em três porções: a ascendente, o arco da aorta e a descendente, que por sua vez se subdivide em torácica e abdominal. São ramos do arco da aorta:", opcoes: ["Tronco braquiocefálico, artéria carótida comum direita e artéria subclávia direita.", "Tronco braquiocefálico, artéria carótida comum esquerda e artéria subclávia esquerda.", "Tronco celíaco, artéria carótida comum esquerda e artéria subclávia direita.", "Tronco braquiocefálico, artéria carótida comum direita e artéria subclávia esquerda."], correta: 1, dica: "Essas artérias fornecem sangue para os braços e cabeça!" },
   
    { pergunta: "As veias safenas são bastante utilizadas nas cirurgias de revascularização do miocárdio, pois apresentam:", opcoes: ["Características histológicas semelhantes às das artérias", "Túnica intima diferenciada.", "Túnica adventícia bastante desenvolvida.", "Túnica muscular pouco desenvolvida."], correta: 0, dica: "São veias com paredes semelhantes às das artérias!" },
   
    { pergunta: "Qual é a diferença entre o ventrículo direito e o ventrículo esquerdo?", opcoes: ["Numero de valvas maior no ventrículo direito.", "No ventrículo direito corre sangue arterial e no esquerdo venoso.", "No ventrículo direito temos uma parede muscular mais delgada.", "No ventrículo direito temos músculos papilares."], correta:2, dica: "A parede do ventrículo esquerdo é mais espessa!" },
   
    { pergunta: "Não são órgãos pertencentes ao sistema linfático:", opcoes: ["Timo e linfonodos", "Tonsila palatina e tonsila faríngea.", "Vasos linfáticos e sanguíneos.", "Baço e timo."], correta: 2, dica: "O sistema linfático inclui vasos e glândulas específicas!" },
    
    { pergunta: "A artéria que faz a irrigação do próprio miocárdio é a?", opcoes: ["Artéria aorta.", "Artéria coronária.", "Artéria cardíaca.", "Artéria magna."], correta: 3, dica: "Essas artérias estão localizadas na parte externa do coração!" },

    { pergunta: "Entre as câmaras cardíacas existe uma parede que não permite o contato do sangue arterial com o venoso. Essa estrutura interna do coração é denominada:", opcoes: ["Septo.", "Valva.", "Válvula.", "Óstio."], correta: 0, dica: "Essa estrutura divide os ventrículos e os átrios!" },
   
    { pergunta: "O esqueleto do nariz é constituído por:", opcoes: ["Exclusivamente por osso.", "Exclusivamente por cartilagem.", "Tecido fibroso.", "Ossos e cartilagem."], correta: 3, dica: "É composto principalmente por cartilagens e ossos!" },

    { pergunta: "A cavidade nasal é subdividida em três partes. São elas:", opcoes: ["O vestíbulo nasal, a parte respiratória e a parte olfatória", "Parte oral, parte nasal e parte respiratória.", "O vestíbulo nasal, a parte oral e a parte respiratória.", "A parte respiratória, a parte nasal e a parte olfatória."], correta: 0, dica: "São regiões que têm funções específicas na respiração!" },
    
    { pergunta: "O limite anatômico posterior da cavidade nasal é chamado de:", opcoes: ["Faringe.", "Laringe.", "Coánas.", "Nariz."], correta: 2, dica: "Esse limite é responsável pela passagem do ar para a faringe!" },

    { pergunta: "São características do brônquio principal direito:", opcoes: ["Ser mais curto, mais horizontalizado e mais calibroso.", "Ser mais longo, mais horizontalizado e mais calibroso.", "Ser mais curto, mais verticalizado e mais calibroso.", "Ser mais curto, mais verticalizado e menos calibroso."], correta: 2, dica: "O brônquio direito é mais direto e maior!" },
    
    { pergunta: "As estruturas anatômicas pertencentes à porção respiratória da árvore bronquial são:", opcoes: ["Os alvéolos, os bronquíolos terminais e os ductos alveolares.", "Os alvéolos, os brônquios respiratórios e os ductos alveolares.", "Os alvéolos, os brônquios terminais e os ductos alveolares.", "Os alvéolos, os bronquíolos respiratórios e os ductos alveolares."], correta: 3, dica: "Essas estruturas são responsáveis pela troca gasosa!" },
    
    { pergunta: "São características exclusivas do pulmão esquerdo:", opcoes: ["Língula e incisura cardíaca.", "Fissura horizontal e lobo médio.", "Fissura horizontal e língula.", "Fissura media e lobo inferior."], correta: 0, dica: "Essas estruturas ajudam a acomodar o coração!" },

    { pergunta: "São características exclusivas do pulmão direito:", opcoes: ["Língula, fissura oblíqua e lobo superior.", "Fissura horizontal e lobo médio.", "Fissura horizontal e língula.", "Fissura media e lobo inferior."], correta: 1, dica: "O pulmão direito tem mais lobos que o esquerdo!" },

    { pergunta: "Assinale a alternativa correta.", opcoes: ["Nos pulmões encontramos as faces: diafragmática, mediastinal e costal", "O pulmão direito possui dois lobos e o esquerdo possui três.", "Cada pulmão esta envolvido pela sua pleura parietal.", "No hilo pulmonar encontramos apenas os brônquios principais."], correta: 0, dica: "Essas faces são essenciais para o contato com outras estruturas!" },
   
    { pergunta: "A membrana conjuntiva que reveste os pulmões é chamada de:", opcoes: ["Pericárdio.", "Pleura.", "Peritônio.", "Pleuritônio."], correta: 1, dica: "Ela envolve os pulmões e facilita a movimentação!" },

    { pergunta: "As partes anatômicas do esôfago são:", opcoes: ["Cárdia e piloro.", "Cervical, torácica e diafragmática.", "Cervical, torácica e abdominal.", "Cárdia, torácica e piloro."], correta: 2, dica: "São essas regiões que permitem a passagem do alimento!" },

    { pergunta: "Os esfíncteres que estão na entrada e saída do estômago são, respectivamente:", opcoes: ["Cárdia e tênia.", "Saculação do colo e piloro.", "Cárdia e piloro.", "Tênia e piloro."], correta: 2, dica: "Esses esfíncteres regulam a entrada e saída dos alimentos!" },

    { pergunta: "As partes anatômicas do estômago são:", opcoes: ["Ápice e base.", "Ápice, base e colo.", "Base, colo e região pilórica.", "Fundo, corpo e região pilórica."], correta: 3, dica: "Essas partes formam o estômago para a digestão!" },

    { pergunta: "A túnica muscular externa do estômago apresenta uma característica singular em relação ao trato gastrointestinal, pois:", opcoes: ["Apresenta uma camada com fibras no sentido longitudinal.", "Apresenta uma camada com fibras no sentido circular.", "Não apresenta uma camada com fibras no sentido oblíquo.", "Apresenta uma camada com fibras no sentido oblíquo."], correta: 3, dica: "Essa camada facilita a movimentação do alimento!" },
   
    { pergunta: "As glândulas salivares secretam a saliva para dentro da cavidade bucal. São elas:", opcoes: ["Glândulas endócrinas", "Glândulas exócrinas", "Glândulas mistas", "Glândulas mucosas"], correta: 1, dica: "Essas glândulas possuem ductos para liberar a saliva!" },
   
    { pergunta: "O fígado possui lobos que podem ser visualizados nas faces visceral e diafragmática. Os lobos hepáticos são:", opcoes: ["Direito, esquerdo, caudado e quadrado", "Direito, esquerdo, caudado e redondo", "Superior, inferior, caudado e cruzado", "Medial, lateral, esquerdo e direito"], correta: 0, dica: "O fígado é dividido em 4 lobos!" },
   
    { pergunta: "A secreção liberada pelo pâncreas neutraliza o pH do quimo e para isso é lançada no:", opcoes: ["Estômago", "Esôfago", "Jejuno", "Duodeno"], correta: 3, dica: "O pâncreas libera bicarbonato para neutralizar o pH!" },
   
    { pergunta: "O intestino delgado é anatomicamente constituído por três porções. São elas:", opcoes: ["Piloro, cárdia e fundo", "Duodeno, jejuno e íleo", "Duodeno e tênia", "Cárdia, piloro e íleo"], correta: 1, dica: "Essas três partes são essenciais para a digestão!" },
   
    { pergunta: "A primeira porção do intestino grosso é o _______________________ onde está localizado o ________________________.", opcoes: ["Colo ascendente; reto", "Ceco; ânus", "Colo descendente; apêndice vermiforme", "Ceco; apêndice vermiforme"], correta: 3, dica: "O ceco é a primeira parte do intestino grosso!" },
    
    { pergunta: "As ________________ e as ______________ são características exclusivas do intestino grosso.", opcoes: ["Tênias; vias biliares", "Vias biliares; saculações do colo", "Tênias; saculações do colo", "Vias biliares; tênias"], correta: 2, dica: "As tênias e as saculações são características do intestino grosso!" },
   
    { pergunta: "A flexura hepática está localizada entre:", opcoes: ["Colo ascendente e transverso", "Colo descendente e sigmoide", "Colo transverso e descendente", "Ceco e colo ascendente"], correta: 0, dica: "A flexura hepática conecta o colo ascendente com o transverso!" },
   
    { pergunta: "A membrana que reveste a parede da cavidade abdominal é o (a):", opcoes: ["Pericárdio", "Periósteo", "Pericôndrio", "Peritônio"], correta: 3, dica: "O peritônio reveste a cavidade abdominal!" },
   
    { pergunta: "O tronco encefálico é constituído pelo:", opcoes: ["Mesencéfalo, cérebro e cerebelo", "Mesencéfalo, cerebelo e nervos encefálicos", "Mesencéfalo, ponte e bulbo", "Mesencéfalo, cerebelo e bulbo"], correta: 2, dica: "O tronco encefálico é formado por essas três partes!" },
   
    { pergunta: "O sistema nervoso periférico é responsável pela comunicação da periferia do corpo com o sistema nervoso central. Na sua composição encontramos:", opcoes: ["Os nervos, a ponte e as terminações nervosas", "Os nervos, os gânglios e as terminações nervosas", "Os gânglios, a ponte e o bulbo", "As terminações nervosas, a ponte e o bulbo"], correta: 1, dica: "O sistema nervoso periférico inclui nervos, gânglios e terminações!" },
   
    { pergunta: "De acordo com suas funções na condução dos impulsos, os neurônios podem ser:", opcoes: ["Sensitivos e pseudounipolares", "Motores e bipolares", "Sensitivos, motores e de associação", "Sensitivos, de associação e unipolares"], correta: 2, dica: "Os neurônios têm funções sensitivas, motoras e de associação!" },
   
    { pergunta: "Qual das alternativas a seguir apresenta uma sequência correta de estruturas por onde passam os espermatozoides?", opcoes: ["Testículo, ducto deferente e epidídimo", "Epidídimo, ducto deferente e ducto ejaculatório", "Ducto deferente, epidídimo e testículo", "Testículo, ducto ejaculatório e ducto deferente"], correta: 1, dica: "Os espermatozoides passam pelo epidídimo, ducto deferente e ducto ejaculatório!" },
   
    { pergunta: "Os espermatozoides são produzidos:", opcoes: ["Na próstata", "Nos túbulos seminíferos", "Nos ductos deferentes", "Nas glândulas seminais"], correta: 1, dica: "A produção dos espermatozoides ocorre nos túbulos seminíferos!" },
   
    { pergunta: "Qual é o órgão responsável pelo armazenamento dos espermatozoides?", opcoes: ["Epidídimo", "Próstata", "Testículos", "Rede testicular"], correta: 0, dica: "O epidídimo é onde os espermatozoides são armazenados!" },
   
    { pergunta: "Qual camada do útero descama durante a menstruação?", opcoes: ["Miocárdio", "Endométrio", "Miométrio", "Perimétrio"], correta: 1, dica: "Durante a menstruação, é o endométrio que descama!" },
   
    { pergunta: "O órgão de cópula feminino é:", opcoes: ["Uretra", "Vestíbulo da vagina", "Vagina", "Útero"], correta: 2, dica: "A vagina é o órgão de cópula feminino!" },
   
    { pergunta: "Diretamente ligado à tuba uterina encontramos a (o):", opcoes: ["Útero", "Vagina", "Ovário", "Ovócito"], correta: 0, dica: "A tuba uterina está ligada ao ovário!" },
   
    { pergunta: "O ápice da pirâmide renal é chamado de _________________ e aponta para o ____________ do rim.", opcoes: ["Hilo renal; interior", "Seio renal; exterior", "Papila renal; interior", "Papila renal; exterior"], correta: 3, dica: "O ápice da pirâmide renal é a papila renal e aponta para o exterior do rim!" }
    
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
