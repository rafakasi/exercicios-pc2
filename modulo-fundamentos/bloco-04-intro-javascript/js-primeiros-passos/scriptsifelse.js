const notaCandidato = 100;

if (notaCandidato >= 80) {
    console.log('Aprovado(a)!');
}
else if (notaCandidato < 80 && notaCandidato >= 60) {
    console.log('Você está na nossa lista de espera');
}
else if (notaCandidato < 60) {
    console.log('Você foi reprovado(a)!');
}

