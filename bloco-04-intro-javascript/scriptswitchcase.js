let estadoProcesso = 'aprovada';

switch (estadoProcesso){
    case 'aprovada':
      console.log('Parabéns você conseguiu a aprovação!! :D');
      break;

    case 'reprovada':
      console.log('Sinto muito, infelizmente você não conseguiu! :(');
        break;

    case 'lista':
      console.log('Passou perto, você está na nossa lista de espera! :)');
      break;
    
    default:
      console.log('Não se aplica')
}