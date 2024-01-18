let setaDireita = window.document.getElementById("seta_direita");
let Leonardo = window.document.getElementById("Leonardo");
let Samanta = window.document.getElementById("Samanta");
let Bruna = window.document.getElementById("Bruna");
let setaEsquerda = window.document.getElementById("seta_esquerda");
function RolarParaDireita() {
    Leonardo.style = "display:none";
    Samanta.style = "display:flex";
    setaDireita.style = "display: none";
    setaEsquerda.style = "display: flex; margin-top:55px";
}
function RolarParaEsquerda() {
    Leonardo.style = "display:flex";
    Samanta.style = "display:none";
    setaEsquerda.style ="display:none";
    setaDireita.style = "display:flex; margin_top:55px";
}