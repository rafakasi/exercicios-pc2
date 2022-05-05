const horaCorrete = 16;
let message = ''

if (horaCorrete >= 22){
    console.log('Não deveríamos coemr nada, é hora de dormir');
}
else if (horaCorrete >= 18 && horaCorrete < 22){
    console.log('Rango da noite, vamos jnatar :D');
}
else if (horaCorrete >= 14 && horaCorrete < 18){
    console.log('Vamos fazer um bolo pro café da tarde?');
}
else if (horaCorrete >= 11 && horaCorrete < 14){
    console.log('Hora do almoço!!!');
}
else if (horaCorrete >= 4 && horaCorrete < 11){
    console.log('Hmmmm, cheiro de café recém passado'); 
}

console.log(message)