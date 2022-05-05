let word = 'tryber';
let reversoWord = '';

for (let index = 0; index < word.length; index += 1) {
  reversoWord += word[word.length - 1 - index];
}

console.log(reversoWord);