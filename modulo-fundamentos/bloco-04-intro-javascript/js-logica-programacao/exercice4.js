let maiorNumero = 0;

for (let numeroAtual = 0; numeroAtual <= 50; numeroAtual += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < numeroAtual; currentDivisor += 1) {
    if (numeroAtual % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    maiorNumero = numeroAtual;
  }
}

console.log(maiorNumero);