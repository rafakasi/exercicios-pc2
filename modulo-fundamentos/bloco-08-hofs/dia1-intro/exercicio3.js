// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const respostasCorretas = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostasEstudantes = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificadas = (respostasCorretas, respostasEstudantes) => {
if(respostasCorretas === respostasEstudantes) {
    return 1;
} if (respostasEstudantes === 'N.A') {
    return 0;
}
return -0.5;
}

const checa = (respostasCorretas, respostasEstudantes, callback) => {
    let contando = 0;
    for (let i = 0; i < respostasCorretas.length; i += 1) {
        const callbackReturn = callback(respostasCorretas[i], respostasEstudantes[i]);
        contando += callbackReturn
    }
    return `Resultado final: ${contando} pontos`
}

console.log(checa(respostasCorretas, respostasEstudantes, verificadas));