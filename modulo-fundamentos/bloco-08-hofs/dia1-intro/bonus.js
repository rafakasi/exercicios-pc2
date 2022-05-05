// Game Actions Simulator
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDamage = () => {
    dragon.damage = Math.floor((Math.random() * (dragon.strength - 15 + 1) + 15));
    return dragon.damage;
}

// Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDamage = () => {
    const mult = warrior.strength * warrior.weaponDmg;
    warrior.damage = Math.floor((Math.random() * (mult - warrior.strength + 1) + warrior.strength));
    return warrior.damage
}

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const mageDamage = (mage) => {
    let mult = mage.intelligence * 2;
    let obj = {
        dano: Math.floor((Math.random () * (mult - mage.intelligence + 1) + mage.intelligence)),
        manaGasta: 0,
    }
    if (mage.mana >= 15) {
        mage.mana -= 15;
        obj.manaGasta = 15;
    } else {
        obj.dano = 'Não possui mana suficiente';
        obj.manaGasta = 0;
    }
    return obj;
}