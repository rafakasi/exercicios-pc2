
// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo

//Com base nesse exemplo, se você optasse por não usar função e precisasse dar bom dia para pessoas diferentes várias vezes durante o código, teria que estar sempre mudando o valor da variável nome e sempre escrevendo a mesma mensagem, o que pode acabar gerando erros de digitação e causar erros na sua aplicação.