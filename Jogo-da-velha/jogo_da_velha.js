// Define o jogador atual como "X"
let currentPlayer = "X";

// Seleciona todas as células do jogo da velha
const cells = document.querySelectorAll('.cell');

// Adiciona um evento de clique a cada célula
cells.forEach(function(cell) {
  cell.addEventListener('click', function() {
    // Se a célula já estiver preenchida, não faça nada
    if (cell.textContent !== "") {
      return;
    }
    
    // Preenche a célula com o símbolo do jogador atual
    cell.textContent = currentPlayer;
    
    // Verifica se o jogador atual venceu
    if (checkWin()) {
      alert(currentPlayer + " venceu!");
      resetGame();
      return;
    }
    
    // Troca o jogador atual para o próximo jogador
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});

// Verifica se o jogador atual venceu
function checkWin() {
  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // Verifica se alguma das linhas, colunas ou diagonais tem o mesmo símbolo
  for (let i = 0; i < rows.length; i++) {
    const [a, b, c] = rows[i];
    if (cells[a].textContent === currentPlayer &&
        cells[b].textContent === currentPlayer &&
        cells[c].textContent === currentPlayer) {
      return true;
    }
  }

  return false;
}

// Reinicia o jogo
function resetGame() {
  cells.forEach(function(cell) {
    cell.textContent = "";
  });
  currentPlayer = "X";
}
