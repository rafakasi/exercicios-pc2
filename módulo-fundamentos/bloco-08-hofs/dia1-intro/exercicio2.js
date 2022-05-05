// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checando = (aposta, callback) => {
    const numA = callback();
    return (aposta === numA) ? 'Parabéns você está milionário' : 'Deu ruim';
} 

const resultadoSoreteio = () => {
    const numA = Math.round(Math.random() * 5)
    return numA;
}

console.log(checando(3,resultadoSoreteio));