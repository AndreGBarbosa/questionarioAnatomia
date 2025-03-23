const perguntas = [
   
  { pergunta: "A Revolta da Vacina, ocorrida em 1904, foi motivada principalmente:", opcoes: ["Pela criação do SUS", "Pela resistência da população à vacinação obrigatória", "Pela fundação do Instituto Butantan", "Pela falta de vacina contra a febre amarela"], correta: 1, dica: "A população se revoltou contra a imposição da vacina obrigatória sem esclarecimento adequado!" },
  { pergunta: "As Caixas de Aposentadoria e Pensão (CAPs) foram criadas pela:", opcoes: ["Lei 8.080/90", "Reforma Sanitária de 1986", "Lei Eloy Chaves, em 1923", "Constituição de 1988"], correta: 2, dica: "A Lei Eloy Chaves é considerada o marco inicial da previdência social no Brasil!" },
  { pergunta: "A Lei 8.080/90 é conhecida por:", opcoes: ["Criar o Programa Saúde da Família", "Regulamentar o SUS", "Criar o INSS", "Abolir o Ministério da Saúde"], correta: 1, dica: "A Lei 8.080/90 organizou e regulamentou o funcionamento do SUS!" },
  { pergunta: "Os princípios doutrinários do SUS incluem:", opcoes: ["Equidade, Universalidade e Integralidade", "Preventivo, Curativo e Especializado", "Planejamento, Controle e Acompanhamento", "Imunidade, Vacinação e Reabilitação"], correta: 0, dica: "Esses três princípios garantem o acesso justo, para todos e de forma completa!" },
  { pergunta: "O Programa de Saúde da Família tem como objetivo:", opcoes: ["Atender apenas doenças crônicas", "Prevenir e promover a saúde da população", "Focar apenas na reabilitação", "Ampliar os hospitais privados"], correta: 1, dica: "O foco é a prevenção e promoção da saúde no território em que a equipe atua!" },
  { pergunta: "O Instituto Oswaldo Cruz foi inicialmente criado com o nome de:", opcoes: ["Instituto Pasteur", "Instituto Soroterápico Federal", "Instituto Nacional de Saúde Pública", "Instituto Carlos Chagas"], correta: 1, dica: "Foi criado para produzir soros e vacinas contra doenças infecciosas!" },
  { pergunta: "A principal função do CONASEMS é:", opcoes: ["Gerenciar hospitais federais", "Representar os secretários municipais de saúde", "Contratar médicos estrangeiros", "Controlar o fornecimento de vacinas"], correta: 1, dica: "O CONASEMS representa e orienta os gestores municipais de saúde!" },
  { pergunta: "Um dos principais objetivos do PIASS, criado em 1976, foi:", opcoes: ["Urbanizar as capitais brasileiras", "Interiorizar as ações de saúde e saneamento", "Ampliar o setor privado de saúde", "Substituir o SUS"], correta: 1, dica: "Focado na descentralização dos serviços de saúde!" },
  { pergunta: "A Lei 8.142/1990 trata principalmente:", opcoes: ["Da regulamentação da Anvisa", "Do financiamento privado do SUS", "Da participação da comunidade na gestão do SUS", "Da criação da CLT"], correta: 2, dica: "A Lei 8.142/90 garante a participação da sociedade nas decisões do SUS!" },
  { pergunta: "A NOB 01/96 trouxe qual avanço para a gestão do SUS?", opcoes: ["A privatização da atenção primária", "A extinção do PSF", "A consolidação da municipalização da saúde", "A eliminação da Vigilância Sanitária"], correta: 2, dica: "A NOB 01/96 consolidou a gestão municipal como responsável pela saúde!" },
  { pergunta: "A função dos Conselhos de Saúde é:", opcoes: ["Planejar obras públicas", "Fiscalizar os hospitais privados", "Participar da formulação e fiscalização das políticas públicas de saúde", "Realizar mutirões de vacinação"], correta: 2, dica: "Os Conselhos de Saúde ajudam a formular e fiscalizar as políticas de saúde no SUS!" },
  { pergunta: "O PAB – Piso da Atenção Básica – é calculado com base:", opcoes: ["No número de leitos por município", "Na quantidade de médicos disponíveis", "No valor fixo per capita e população local", "No número de atendimentos por hospital"], correta: 2, dica: "O cálculo é feito considerando a população e o valor fixo per capita!" },
  { pergunta: "As Normas Operacionais Básicas (NOB) são:", opcoes: ["Protocolos hospitalares privados", "Leis da previdência", "Regras para operacionalização do SUS", "Diretrizes da rede privada de saúde"], correta: 2, dica: "As NOB definem como o SUS deve ser operado no território!" },
  { pergunta: "O agente comunitário de saúde está vinculado a:", opcoes: ["Hospitais filantrópicos", "Secretaria Estadual de Saúde", "Secretaria Municipal de Saúde", "Ministério da Economia"], correta: 2, dica: "O agente comunitário de saúde atua localmente, vinculado ao município!" },
  { pergunta: "O conceito de Equidade no SUS significa:", opcoes: ["Atender somente casos de urgência", "Garantir igualdade sem considerar as diferenças", "Tratar de forma desigual os desiguais, conforme suas necessidades", "Atender apenas pacientes com carteira assinada"], correta: 2, dica: "Equidade significa tratar de maneira diferenciada, conforme as necessidades dos indivíduos!" },
  { pergunta: "A Lei Eloy Chaves é considerada o marco inicial da:", opcoes: ["Reforma sanitária", "Atenção primária à saúde", "Previdência social no Brasil", "Criação do SUS"], correta: 2, dica: "Ela foi responsável pela criação da previdência social no Brasil!" },
  { pergunta: "A Reforma Sanitária Brasileira teve como base a:", opcoes: ["Revolta da Vacina", "Constituição de 1934", "VIII Conferência Nacional de Saúde", "CPMF"], correta: 2, dica: "A Reforma Sanitária foi impulsionada pela VIII Conferência Nacional de Saúde!" },
  { pergunta: "O objetivo principal da vigilância epidemiológica é:", opcoes: ["Construir hospitais", "Reagir a surtos de violência urbana", "Monitorar doenças e propor medidas de controle", "Fornecer estatísticas ao IBGE"], correta: 2, dica: "Ela visa o monitoramento de doenças e a proposição de medidas preventivas!" },
  { pergunta: "A Lei ______, conhecida como Lei Orgânica da Saúde, regulamenta o funcionamento do SUS.", opcoes: ["10.216", "8.080/90", "7.498", "9.656"], correta: 1, dica: "A Lei 8.080/90 é a base legal para a estruturação do SUS!" },
  { pergunta: "O SUS é baseado nos princípios da universalidade, ______ e integralidade.", opcoes: ["imunidade", "prevenção", "equidade", "acessibilidade"], correta: 2, dica: "O SUS tem como base a equidade para tratar os desiguais conforme suas necessidades!" },
  { pergunta: "A NOB 01/96 marcou a consolidação da ______ no modelo de gestão do SUS.", opcoes: ["regionalização", "privatização", "municipalização", "centralização"], correta: 2, dica: "A NOB 01/96 consolidou a municipalização da gestão do SUS!" },
  { pergunta: "A ______ foi criada para garantir a participação da comunidade na formulação das políticas de saúde.", opcoes: ["ANVISA", "Lei 10.507", "Lei 8.142/90", "Lei 9.656"], correta: 2, dica: "A Lei 8.142/90 garante a participação social nas decisões do SUS!" },
  { pergunta: "O Pacto pela Saúde é um acordo entre ______ para melhorar a gestão do SUS.", opcoes: ["hospitais e médicos", "estados, municípios e União", "usuários e conselhos", "governo e setor privado"], correta: 1, dica: "O pacto envolve estados, municípios e a União para a melhoria do SUS!" },
  { pergunta: "A Estratégia Saúde da Família é a principal forma de organizar a ______ no Brasil.", opcoes: ["atenção hospitalar", "vigilância sanitária", "atenção básica", "gestão financeira"], correta: 2, dica: "A Estratégia Saúde da Família organiza e fortalece a atenção básica no Brasil!" },
  { pergunta: "O agente comunitário de saúde atua em parceria com a equipe de ______.", opcoes: ["vigilância ambiental", "urgência e emergência", "saúde da família", "nutrição e dietética"], correta: 2, dica: "O agente comunitário de saúde trabalha diretamente com a equipe de saúde da família!" },
  { pergunta: "O Instituto Nacional de Assistência Médica da Previdência Social (INAMPS) foi criado para:", opcoes: ["Substituir os postos de saúde", "Gerenciar a rede privada", "Organizar a estrutura hospitalar das forças armadas", "Administrar a assistência médica do sistema previdenciário"], correta: 3, dica: "O INAMPS foi criado para gerenciar a assistência médica dentro do sistema previdenciário." },
  { pergunta: "A CPMF foi um imposto criado com a finalidade de:", opcoes: ["Financiar a Previdência Social", "Pagar o funcionalismo público", "Arrecadar recursos exclusivamente para a saúde", "Reduzir o número de hospitais"], correta: 2, dica: "A CPMF foi destinada ao financiamento da saúde." },
  { pergunta: "Os NASF (Núcleos de Apoio à Saúde da Família) foram criados para:", opcoes: ["Substituir os postos de vacinação", "Apoiar tecnicamente as Equipes de Saúde da Família", "Atender exclusivamente gestantes", "Supervisionar os hospitais regionais"], correta: 2, dica: "O NASF apoia as equipes de Saúde da Família com apoio técnico." },
  { pergunta: "O conceito de letalidade, dentro dos indicadores de saúde, refere-se a:", opcoes: ["Quantidade de casos diagnosticados", "Número de novos casos por ano", "Capacidade de uma doença causar óbito", "Tempo de internação hospitalar"], correta: 3, dica: "Letalidade indica o risco de óbito de uma doença." },
  { pergunta: "A responsabilidade por regular relações intermunicipais na atenção básica é da esfera:", opcoes: ["Federal", "Estadual", "Municipal", "Distrital"], correta: 1, dica: "É responsabilidade da esfera estadual a regulação intermunicipal na atenção básica." },
  { pergunta: "A vigilância ambiental atua principalmente com:", opcoes: ["Vacinação de grandes populações", "Controle de surtos virais hospitalares", "Monitoramento de água, ar, solo e riscos ambientais", "Fiscalização de planos de saúde"], correta: 3, dica: "A vigilância ambiental é voltada para o monitoramento de fatores ambientais." },
  { pergunta: "A Portaria nº 648/GM de 2006 está relacionada à:", opcoes: ["Fiscalização de planos de saúde privados", "Política Nacional de Atenção Básica", "Lei de Vigilância Epidemiológica", "Extinção dos CAPs"], correta: 2, dica: "Essa portaria regulamenta a Política Nacional de Atenção Básica." },
  { pergunta: "A Rede de Atenção Básica deve ser organizada com base nos princípios de:", opcoes: ["Alta complexidade e financiamento exclusivo", "Gestão centralizada e curativa", "Territorialização e vínculo com a comunidade", "Atendimento emergencial e terceirização"], correta: 3, dica: "A atenção básica deve ser territorializada e próxima da comunidade." },
  { pergunta: "A ______ de Saúde foi um marco importante para a consolidação do SUS, estabelecendo diretrizes e metas nacionais.", opcoes: ["I Conferência Nacional", "IV Conferência Nacional", "VIII Conferência Nacional", "Conferência Estadual de Saúde"], correta: 3, dica: "A VIII Conferência Nacional de Saúde estabeleceu diretrizes fundamentais para o SUS." },
  { pergunta: "O conceito de ______ se refere ao número de novos casos de uma determinada doença em um período de tempo.", opcoes: ["Mortalidade", "Incidência", "Prevalência", "Letalidade"], correta: 2, dica: "Incidência se refere ao número de novos casos em determinado período." },
  { pergunta: "O modelo de saúde previdenciário predominante até a década de 1980 apresentava como principal falha:", opcoes: ["Atendimento exclusivo a gestantes", "Foco excessivo na medicina preventiva", "Exclusão de grande parte da população sem carteira assinada", "Extinção da rede hospitalar privada"], correta: 2, dica: "A principal falha foi a exclusão de grande parte da população que não tinha vínculo empregatício." },
  { pergunta: "A criação do INPS (Instituto Nacional de Previdência Social) ocorreu em:", opcoes: ["1960", "1967", "1974", "1988"], correta: 1, dica: "O INPS foi criado em 1967." },
  { pergunta: "A Lei 8.080/90 define saúde como:", opcoes: ["Ausência de doenças infecciosas", "Direito de alguns e dever do município", "Resultado exclusivo de ações médicas", "Resultado de fatores sociais, econômicos e ambientais"], correta: 3, dica: "A Lei 8.080/90 define saúde como resultado de fatores sociais, econômicos e ambientais." },
  { pergunta: "A ______ foi criada em 1970 com a função de executar atividades de erradicação e controle de endemias.", opcoes: ["ANVISA", "SUCAM", "FUNASA", "DENERU"], correta: 1, dica: "A SUCAM foi criada para erradicar e controlar endemias no Brasil." },
  { pergunta: "O agente comunitário de saúde atua principalmente em parceria com a equipe de ______.", opcoes: ["vigilância sanitária", "urgência e emergência", "saúde da família", "pronto atendimento"], correta: 3, dica: "O agente comunitário de saúde trabalha com a equipe da saúde da família." },
  { pergunta: "O Plano Hospitalar com Obstetrícia inclui:", opcoes: ["Somente internações de longa duração", "Consultas de rotina a idosos", "Pré-natal, parto e recém-nascido", "Tratamento odontológico"], correta: 3, dica: "Esse plano inclui pré-natal, parto e atendimento ao recém-nascido." },
  { pergunta: "A lei que regulamenta os planos e seguros de saúde é:", opcoes: ["10.216/01", "9.656/98", "8.142/90", "7.498/86"], correta: 2, dica: "A Lei 9.656/98 regulamenta os planos e seguros de saúde." },
  { pergunta: "O objetivo da NOB-SUS 01/93 foi:", opcoes: ["Revogar o SUS", "Estabelecer a vigilância sanitária", "Criar novas categorias de gestão municipal", "Ampliar o modelo hospitalocêntrico"], correta: 3, dica: "A NOB-SUS 01/93 visava criar novas categorias de gestão no SUS." },
  { pergunta: "A descentralização do SUS é definida como:", opcoes: ["Concentração de decisões no Ministério da Saúde", "Transferência de gestão para os estados", "Autonomia do município na gestão da saúde", "Repasse de verbas para a iniciativa privada"], correta: 3, dica: "Descentralização do SUS implica autonomia para os municípios na gestão da saúde." },
  { pergunta: "O conceito de ______ indica a proporção de pessoas que morrem entre os que adoeceram.", opcoes: ["Mortalidade", "Prevalência", "Letalidade", "Incidência"], correta: 3, dica: "Letalidade é a proporção de mortes entre os adoecidos." },
  { pergunta: "A função da vigilância sanitária é:", opcoes: ["Supervisionar os conselhos municipais de saúde", "Executar campanhas educativas em escolas", "Controlar riscos à saúde relacionados a bens, serviços e ambientes", "Realizar apenas fiscalização em hospitais"], correta: 3, dica: "A vigilância sanitária visa controlar riscos à saúde em diversos ambientes." },
  { pergunta: "A vigilância epidemiológica atua diretamente:", opcoes: ["No controle e notificação de doenças e agravos", "Na emissão de alvarás sanitários", "Na fiscalização de contratos públicos", "No controle financeiro do SUS"], correta: 1, dica: "A vigilância epidemiológica foca no controle e notificação de doenças." },
  { pergunta: "O Sistema de Informação sobre Nascidos Vivos é identificado pela sigla:", opcoes: ["SIM", "SINASC", "SIAB", "SAI"], correta: 2, dica: "SINASC é o sistema que registra as informações sobre nascidos vivos." },
  { pergunta: "A Lei 8.142/90 estabelece:", opcoes: ["A criação da ANVISA", "O controle das indústrias farmacêuticas", "A participação da comunidade na gestão do SUS", "O funcionamento dos hospitais universitários"], correta: 3, dica: "A Lei 8.142/90 regulamenta a participação da comunidade no SUS." },
  { pergunta: "A política nacional de atenção básica é definida e atualizada por meio de:", opcoes: ["Emendas constitucionais", "Conferências escolares", "Portarias ministeriais, como a nº 648/GM de 2006", "Decretos estaduais da educação"], correta: 3, dica: "A política de atenção básica é atualizada por portarias ministeriais." }


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

