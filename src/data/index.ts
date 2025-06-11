// %!n

import { Data } from '@/types/data';

const data: Data = {
  count: 5,
  alternatives: 3,
  stories: [
    {
      text: 'Senhor, relatório de situação. As nossas unidades confirmam que o inimigo está a preparar %!1 coordenado com %!2 infiltradas %!3. Detetámos movimentação de %!4 a convergir para %!5 com previsão de chegada %!6. Intercetámos comunicações que indicam o uso de %!7 com o código %!8. Os nossos radares identificaram %!9 a aproximarem-se %!10, possivelmente para um ataque aéreo de diversão. A inteligência apurou que o objetivo principal é capturar %!11 e desativar %!12. Solicito autorização para ativar o plano de contingência e mobilizar as reservas.',
      count: 12,
      prompts: [
        ['UM ATAQUE CIBERNETICO', 'UMA OFENSIVA BIOLOGICA', 'UMA CAMPANHA DE DESINFORMACAO'],
        ['UNIDADES DE INFANTARIA', 'FORCAS ESPECIAIS', 'MERCENARIOS ESTRANGEIROS'],
        ['NA ZONA INDUSTRIAL', 'NO COMPLEXO GOVERNAMENTAL', 'NA BASE AEREA'],
        ['TANQUES PESADOS', 'VEICULOS ANFIBIOS', 'DRONES DE ATAQUE'],
        ['A PONTE PRINCIPAL', 'O AEROPORTO INTERNACIONAL', 'A CENTRAL ELETRICA'],
        ['AS 06H00', 'AO AMANHECER', 'EM 4 HORAS'],
        ['MUNICOES EXPERIMENTAIS', 'ARMAS QUIMICAS', 'PULSOS ELETROMAGNETICOS'],
        ['FENIX', 'HYDRA', 'TEMPESTADE'],
        ['AVIOES DE COMBATE', 'HELICOPTEROS DE ATAQUE', 'BOMBARDEIROS FURTIVOS'],
        ['PELO QUADRANTE LESTE', 'PELO CORREDOR NORTE', 'PELO ESPACO AEREO RESTRITO'],
        ['O CENTRO DE COMUNICACOES', 'O DEPOSITO DE ARMAS', 'O LIDER DA RESISTENCIA'],
        ['OS NOSSOS SISTEMAS DE DEFESA', 'A REDE DE ENERGIA', 'O SISTEMA DE VIGILANCIA'],
      ],
    },

    {
      count: 12,
      text: 'Relatório urgente. O módulo %!1 da estação sofreu uma falha crítica. Os sistemas %!2 estão a falhar e a resposta da equipa de engenharia %!3 está atrasada. Detectámos sinais de %!4 que comprometem a integridade do casco no sector %!5. Os níveis de oxigénio caíram para %!6, colocando a tripulação em risco. Tentámos activar o protocolo de emergência %!7, mas há uma avaria no gerador %!8. Contactámos a nave %!9, a caminho da estação, para assistência, previsão de chegada %!10. Abaixo da ponte principal, o %!11 registou actividade incomum, possivelmente %!12. A situação exige evacuação se não houver estabilização imediata.',
      prompts: [
        ['DE COMUNICACOES', 'DE PROPULSAO', 'DE SUPORTE VITAL'],
        ['ELETRICOS', 'HIDRAULICOS', 'DE CONTROLO AMBIENTAL'],
        ['NO SECTOR NORTE', 'NO HANGAR PRINCIPAL', 'JUNTO AO LABORATORIO'],
        ['RADIACOES ANOMALAS', 'FLUTUACOES MAGNETICAS', 'MICRO METEORITOS'],
        ['7B', '3D', 'ZONA DE CARGA'],
        ['65%', '40%', '25%'],
        ['DE ISOLAMENTO', 'DE DESCIDA RAPIDA', 'DE CONTENCAO'],
        ['PRINCIPAL', 'AUXILIAR', 'DE EMERGENCIA'],
        ['ENDEAVOUR VII', 'PIONEER X', 'HORIZON ALPHA'],
        ['EM 30 MINUTOS', 'EM 1 HORA', 'EM 2 HORAS'],
        ['SENSOR DE MOVIMENTO', 'DETETOR TERMICO', 'CAMARA DE VIGILANCIA'],
        ['UMA INTRUSAO NAO AUTORIZADA', 'UM PICO DE ENERGIA', 'UMA FALHA NO SISTEMA'],
      ],
    },

    {
      count: 12,
      text: 'Encontrei algo estranho na mansão. A porta do %!1 estava trancada por dentro. Aparentemente, a vítima estava a investigar %!2 antes de morrer. A polícia encontrou %!3 escondido no quarto. Os registos mostram que a família tinha dívidas com %!4. O mordomo afirma ter visto %!5 perto da biblioteca. A chave do cofre estava %!6. A vítima tinha um encontro secreto com %!7. A última mensagem no telemóvel da vítima era sobre %!8. Os cães ladraram incessantemente para %!9. A análise forense revelou vestígios de %!10 na chávena da vítima. O detetive suspeita de %!11 devido ao seu passado com %!12. Precisamos de mais informações.',
      prompts: [
        ['ESCRITORIO', 'CAVE', 'QUARTO DOS HOSPEDES'],
        ['UM ANTIGO ARTEFACTO', 'UM CASO DE CORRUPCAO', 'SEGREDOS DE FAMILIA'],
        ['UMA ARMA', 'UM DIARIO', 'UMA FOTOGRAFIA'],
        ['UM AGIOTA', 'UM BANCO SUICO', 'A MAFIA LOCAL'],
        ['UMA FIGURA SOMBRIA', 'UM CARRO DESCONHECIDO', 'O JARDINEIRO'],
        ['ESCONDIDA NUM LIVRO', 'NO BOLSO DA VITIMA', 'DESAPARECIDA'],
        ['A AMANTE', 'O ADVOGADO', 'UM ANTIGO SOCIO'],
        ['UMA HERANCA', 'UM NEGOCIO ARRISCADO', 'UMA AMEACA'],
        ['O PORTAO', 'A FLORESTA', 'O POCO'],
        ['VENENO', 'SEDATIVOS', 'UMA SUBSTANCIA DESCONHECIDA'],
        ['O FILHO', 'A ESPOSA', 'O VIZINHO'],
        ['JOGOS DE AZAR', 'UM ESCANDALO', 'A VITIMA'],
      ],
    },

    {
      count: 12,
      text: 'Capitão, recebemos um sinal de socorro da nave %!1. Eles foram atacados por piratas espaciais perto do planeta %!2. Os piratas roubaram %!3 e fugiram para %!4. A nave está danificada e precisa de %!5. A tripulação relata que os piratas usavam armas %!6. O líder dos piratas é conhecido como %!7. Eles têm uma base secreta em %!8. A nossa missão é recuperar %!9 e capturar os piratas. A nave pirata é uma %!10. Eles estão a planear atacar %!11 para roubar %!12. Preparem-se para o combate!',
      prompts: [
        ['ESTRELA ERRANTE', 'AURORA BOREAL', 'ANDROMEDA V'],
        ['XYLOS', 'KRYPTON 7', 'VEGA PRIME'],
        ['CRISTAIS DE ENERGIA', 'TECNOLOGIA EXPERIMENTAL', 'OURO INTERESTELAR'],
        ['O SISTEMA NEBULA', 'A ZONA DE ASTEROIDES', 'O BURACO NEGRO'],
        ['REPAROS URGENTES', 'SUPORTE MEDICO', 'COMBUSTIVEL'],
        ['DE PLASMA', 'SONICAS', 'DE RADIACAO'],
        ['BARBA NEGRA', 'OLHO DE FOGO', 'DENTE DE SABRE'],
        ['UMA LUA DESERTA', 'UM ASTEROIDE CAMUFLADO', 'UMA ESTACAO ESPACIAL ABANDONADA'],
        ['A CARGA ROUBADA', 'OS REFENS', 'A TECNOLOGIA SECRETA'],
        ['CORSARIO', 'PREDADOR', 'VINGADOR'],
        ['A COLONIA DE NOVA ESPERANCA', 'O POSTO DE COMERCIO ESPACIAL', 'A BASE MILITAR'],
        ['SUPRIMENTOS MEDICOS', 'COMPONENTES DE NAVE', 'DADOS DE INTELIGENCIA'],
      ],
    },

    {
      count: 12,
      text: 'Temos um problema. O agente %!1 foi comprometido. Ele estava a transmitir informações sobre %!2. A fonte dele era %!3. Os russos estão a planear %!4. Precisamos de o extrair antes que %!5. A localização segura é %!6. Ele tem informações sobre %!7. A palavra-chave para o contacto é %!8. A equipa de resgate está a usar %!9. Os russos estão a usar %!10 para o rastrear. A nossa prioridade é proteger %!11 e evitar %!12. A situação é crítica.',
      prompts: [
        ['AGUIA', 'CORVO', 'LINCE'],
        ['O PROGRAMA NUCLEAR', 'A LOCALIZACAO DAS BASES', 'A NOVA ARMA'],
        ['UM OFICIAL DO KGB', 'UMA CIENTISTA', 'UM DIPLOMATA'],
        ['UM ATAQUE SURPRESA', 'UMA OPERACAO DE SABOTAGEM', 'UMA CAMPANHA DE DESINFORMACAO'],
        ['O CAPTUREM', 'O MATEM', 'REVELE OS SEGREDOS'],
        ['A EMBAIXADA', 'UM ESCONDERIJO', 'UM PONTO DE ENCONTRO'],
        ['A IDENTIDADE DOS ESPIOES', 'OS PLANOS DE INVASAO', 'A TECNOLOGIA ROUBADA'],
        ['AURORA', 'TEMPESTADE', 'ECLIPSE'],
        ['UM DISFARCE', 'UM TUNEL SECRETO', 'UM HELICOPTERO'],
        ['ESCUTAS TELEFONICAS', 'AGENTES DUPLOS', 'TECNOLOGIA DE RASTREAMENTO'],
        ['A SUA IDENTIDADE', 'OS DOCUMENTOS', 'A SUA VIDA'],
        ['UMA GUERRA', 'UM ESCANDALO INTERNACIONAL', 'A SUA CAPTURA'],
      ],
    },
  ],
};

export default data;
