// Obter o canvas e o contexto de desenho
const canvas = document.getElementById("desenho");
const ctx = canvas.getContext("2d");

// Variáveis para controlar o desenho
let desenhando = false;
let ultimaPosicao = { x: 0, y: 0 };

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

// Event listeners para o canvas
canvas.addEventListener("mousedown", iniciarDesenho);
canvas.addEventListener("mousemove", desenhar);
canvas.addEventListener("mouseup", pararDesenho);
canvas.addEventListener("mouseout", pararDesenho);

// Limpar o canvas quando o botão for clicado
const btnLimpar = document.getElementById("limpar");
btnLimpar.addEventListener("click", limparCanvas);
