import {makeFirstTerm, makeNextTerm, makeNextTermWithout10orders} from './generateTerms';

// Генерация примеров

export function makeExercises(dig, terms, orders) {

    const makeInCircle = makeFunction => {
        for (let i = 1; i < terms; i++) {
            prevResult += arrOfTerms[i - 1]
            arrOfTerms.push(makeFunction(prevResult, dig))
        }
    }

    const arrOfTerms = [];
    arrOfTerms.push(makeFirstTerm(dig));
    let prevResult = 0;
    if (orders.five[0] === 'Любой' && orders.ten[0] === 'Любой') { // если не выбраны законы
        console.log('not specified')
        makeInCircle(makeNextTerm);
    } else { // если выбраны законы
        makeInCircle(makeNextTermWithout10orders);
        console.log('without10')
    }
    console.log(arrOfTerms)
    return arrOfTerms;
}