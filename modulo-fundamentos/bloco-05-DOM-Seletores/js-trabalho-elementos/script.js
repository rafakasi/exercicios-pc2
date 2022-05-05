// // 1. Crie um irmão para `elementoOndeVoceEsta`.
// const pai = document.getElementById('pai');
// const irmaoElementoOndeVoceEsta = document.createElement('section');
// irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
// pai.appendChild(irmaoElementoOndeVoceEsta);

// // 2. Crie um filho para `elementoOndeVoceEsta`.
// const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// const filhoElementoOndeVoceEsta = document.createElement('section');
// filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
// elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

// // 3. Crie um filho para `primeiroFilhoDoFilho`.
// const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
// const filhoPrimeiroFilhoDoFilho = document.createElement('section');
// filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
// primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// // 4. A partir desse filho criado, acesse `terceiroFilho`.
// const terceiroFilho = filhoPrimeiroFilhoDoFilho
//   .parentElement // primeiroFilhoDoFilho
//   .parentElement // elementoOndeVoceEsta
//   .nextElementSibling; // terceiroFilho
// console.log(terceiroFilho);

// Remova todos os elementos filhos de paiDoPai exceto pai,
    // elementoOndeVoceEsta e primeiroFilhoDoFilho.
    const pai = document.getElementById('pai');

    for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
      const currentChildren = pai.childNodes[index];
      if (currentChildren.id !== 'elementoOndeVoceEsta') {
        currentChildren.remove();
      }
    }

    const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
    segundoEUltimoFilhoDoFilho.remove();