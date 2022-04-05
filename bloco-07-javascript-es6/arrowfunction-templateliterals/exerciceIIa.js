const maiorPalavra = frase => {
    let arrPalavaras = frase.split(' ')
    let arrContadorMax = 0
    let palaEncontrada = ''

    for(const palavra of arrPalavaras) {
        if(palavra.length > arrContadorMax) {
            arrContadorMax = palavra.length
            palaEncontrada = palavra
        }
    }
    return palaEncontrada
}

console.log(maiorPalavra('Antonio foi ao banheiro e não sabemos o que aconteceu'))