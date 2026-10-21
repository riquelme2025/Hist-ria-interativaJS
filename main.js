const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "A cidade tem pouco dinheiro. Onde investir primeiro?",
    alternativas: [
      {
        texto: "Educação.",
        afirmacao: "Investir em educação prepara os cidadãos para o futuro e gera oportunidades."
      },
      {
        texto: "Saúde.",
        afirmacao: "Investir em saúde garante atendimento à população e melhora a qualidade de vida."

      }
    ]
  },
  {
    enunciado: "A cidade enfrenta falta de água.",
    alternativas: [
      {
        texto: "Investir em infraestrutura.",
        afirmacao: "Melhorar a infraestrutura ajuda a evitar vazamentos e garante o abastecimento de água."
      },
      {
        texto: "Criar campanhas de conscientização.",
        afirmacao: "Conscientizar a população ajuda a reduzir o desperdício de água."
      }
    ]
  },
  {
    enunciado: "Há muito lixo nas ruas.",
    alternativas: [
      {
        texto: "Aumentar a coleta.",
        afirmacao: "Aumentar a coleta mantém as ruas limpas e reduz o acúmulo de lixo."
      },
      {
        texto: "Investir em reciclagem.",
        afirmacao: "Incentivar a reciclagem reduz a quantidade de lixo e ajuda a preservar o meio ambiente."
      }
    ]
  },
  {
    enunciado: "O trânsito está piorando.",
    alternativas: [
      {
        texto: " Melhorar o transporte público.",
        afirmacao: "Um transporte público eficiente reduz o número de carros nas ruas e melhora a mobilidade."
      },
      {
        texto: "Construir novas vias.",
        afirmacao: "Construir novas vias pode melhorar o fluxo de veículos e diminuir os congestionamentos."
      }
    ]

  },
  {
    enunciado: "Depois de quatro anos:",
    alternativas: [
      {
        texto: " A cidade ficou mais sustentável.",
        afirmacao: "As decisões tomadas ao longo dos anos contribuíram para o equilíbrio entre o desenvolvimento e a preservação ambiental."
      },
      {
        texto: "A cidade melhorou economicamente, mas ainda enfrenta problemas ambientais.",
        afirmacao: "O crescimento econômico trouxe benefícios, mas ainda são necessários investimentos para resolver os problemas ambientais."
      }
    ]
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa))
    caixaAlternativas.appendChild(botaoAlternativa);
  }
}
function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2030 ...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}


mostraPergunta();