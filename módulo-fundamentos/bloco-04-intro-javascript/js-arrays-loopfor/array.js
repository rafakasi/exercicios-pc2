let pizza = ['Margerita','Calabresa', 'Frango'];

pizza.push('Palmito'); 
pizza.push('Peito de Peru');
pizza.unshift('Lombo Canadense') //adicionar no início do array

for (let index = 0; index < pizza.length; index +=1) {
    console.log(pizza[index]);
}

//O método .pop() nos permite remover o último item do array. Agora, se precisarmos remover o primeiro item da lista, podemos usar o .shift() . Faça em seu console e veja o resultado