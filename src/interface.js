const restartBtn = document.getElementById('restart'),
    newGameBtn = document.getElementById('newGame'),
    exerciseBlock = document.getElementById('exercise');

export const promptGameOptions = () => {
    let DIGITS;
    let NUM_OF_TERMS;
    do {
        DIGITS = +prompt('DIGITS from 1 to 5');
    } while (DIGITS < 1 || +DIGITS > 5)
    
    do {
        NUM_OF_TERMS = +prompt('NUM_OF_TERMS from 1 to 10');
    } while (NUM_OF_TERMS < 1 || NUM_OF_TERMS > 10)

    return {
        DIGITS,
        NUM_OF_TERMS
    }
}

export function btnAddListerers({restartFunc, newGameFunc}) {
    restartBtn.addEventListener('click', restartFunc)
    newGameBtn.addEventListener('click', newGameFunc);
}