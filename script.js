// Obter o canvas e o contexto de desenho
const canvas = document.getElementById("desenho");
const ctx = canvas.getContext("2d");

// Variáveis para controlar o desenho
let desenhando = false;
let ultimaPosicao = { x: 0, y: 0 };

// Variáveis para a cor e espessura do lápis
let corAtual = "#000000";  // Cor inicial (preto)
let espessuraAtual = 3;    // Espessura inicial

// Função para iniciar o desenho
function iniciarDesenho(event) {
    desenhando = true;
    ultimaPosicao.x = event.offsetX;
    ultimaPosicao.y = event.offsetY;
}

// Função para desenhar no canvas
function desenhar(event) {
    if (!desenhando) return;
    const x = event.offsetX;
    const y = event.offsetY;
    
    ctx.beginPath();
    ctx.moveTo(ultimaPosicao.x, ultimaPosicao.y);
    ctx.lineTo(x, y);
    ctx.strokeStyle = corAtual; // Define a cor do lápis
    ctx.lineWidth = espessuraAtual; // Define a espessura do lápis
    ctx.stroke();
    
    ultimaPosicao.x = x;
    ultimaPosicao.y = y;
}

// Função para parar o desenho
function pararDesenho() {
    desenhando = false;
}

// Função para limpar o canvas
function limparCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Alterar a cor do lápis
const corInput = document.getElementById("cor");
corInput.addEventListener("input", function() {
    corAtual = corInput.value;
});

// Alterar a espessura do lápis
const espessuraInput = document.getElementById("espessura");
espessuraInput.addEventListener("input", function() {
    espessuraAtual = espessuraInput.value;
});

// Event listeners para o canvas
canvas.addEventListener("mousedown", iniciarDesenho);
canvas.addEventListener("mousemove", desenhar);
canvas.addEventListener("mouseup", pararDesenho);
canvas.addEventListener("mouseout", pararDesenho);

// Limpar o canvas quando o botão for clicado
const btnLimpar = document.getElementById("limpar");
btnLimpar.addEventListener("click", limparCanvas);
