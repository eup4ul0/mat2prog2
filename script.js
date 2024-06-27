const caixaPrincipal = document.querySelector(".caixa-Principal");
const caixaPerguntas = document.querySelector(".caixa-Perguntas");
const caixaAlternativa = document.querySelector(".caixa-Alternativa");
const caixaResultado = document.querySelector(".caixa-Resultado");
const textoResultado = document.querySelector(".texto-Resultado");

const perguntas =[
   {
    enunciado: "pergunta 1",
    alternativa: ["Alternativa 1", "alternativa 2"],

   },
   {
    enunciado: "pergunta 2",
    alternativa: ["Alternativa 1", "alternativa 2"],

   },
   {
    enunciado: "pergunta 3",
    alternativa: ["Alternativa 1", "alternativa 2"],

   },


]
let atual = 0;
let perguntaAtual;
 function mostraPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
 }


