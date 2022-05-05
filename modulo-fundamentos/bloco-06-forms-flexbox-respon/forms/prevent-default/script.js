// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

// Função para previnir o comportamento
function prevent(event) {
    event.preventDefault();
}

// Escutador do elemento aLink
HREF_LINK.addEventListener('click', prevent)

// Função para previnir o check
function preventCheck(event){
    event.preventDefault();
}

// Escutador do elemento checkbox
INPUT_CHECKBOX.addEventListener('click', preventCheck)

// Função somente escrever A
function preventKey(event){
    const teclado = event.key;
    if (teclado !== 'a' && teclado !== 'A') {
        event.preventDefault();
    }
};

// Escutador do elemento input-text
INPUT_TEXT.addEventListener('keypress', preventKey)