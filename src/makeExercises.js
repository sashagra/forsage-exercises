import {makeFirstTerm, makeNextTerm, makeNextTermWithout10orders} from './generateTerms';

// Генерация примеров
export function makeExercises(dig, terms, orders) {

    const arrOfTerms = [];
    arrOfTerms.push(makeFirstTerm(dig));
    let prevResult = 0;
    if (orders.with5.length === 0 && orders.with10.length === 0) { // если не выбраны законы
        for (let i = 1; i < terms; i++) {
            prevResult += arrOfTerms[i - 1]
            console.log('not specified')
            arrOfTerms.push(makeNextTerm(prevResult, dig))
        }
    } else if (orders.with10[0] === 'without10') { // если выбраны законы
        for (let i = 1; i < terms; i++) {
            prevResult += arrOfTerms[i - 1]
            console.log('without')
            arrOfTerms.push(makeNextTermWithout10orders(prevResult, dig))
        }
    } else {
        console.log('else')
        return
    }
    console.log(arrOfTerms)
    return arrOfTerms;
}