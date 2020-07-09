//Функция принимает два числа (min и max) и генерирует рандомно число между ними
import {getRandomIntInclusive} from './getRandomIntInclusive';

// Первое слагаемое не учитывает законов
export const makeFirstTerm = digits => {
    const max = Math.pow(10, digits) - 1;
    const min = Math.pow(10, (digits - 1));
    const firstTerm = getRandomIntInclusive(min, max);

    return firstTerm
}
// Последующие слагаемые без учета законов
export const makeNextTerm = (prevResult, digits) => {
    let term;
    const max = Math.pow(10, digits) - 1;
    const min = Math.pow(10, (digits - 1));
    do {
        term = getRandomIntInclusive(min, max);
        if (getRandomIntInclusive(0, 1)) term *= -1;
    } while ( (prevResult + term) < min || (prevResult + term) > max)

    return term;
}

// Последующие слагаемые без законов на 10
export const makeNextTermWithout10orders = (prevResult, digits) => {
    const termString = [];
    const max = Math.pow(10, digits) - 1;
    const min = Math.pow(10, (digits - 1));
    let plus = 1;
    const firstTerm = prevResult.toString();
    // проверка на возможность сложения с числом той же разрядности.
    if (+prevResult > max - min) {
        plus = -1
    } else {
        if (getRandomIntInclusive(0, 1) && prevResult[0] > 1) plus = -1;
    }
    let term = "";
    do {
        let max1,
            min1;
        for (let i = 0; i < firstTerm.length; i++) {
            i === 0 ? min1 = 1 : min1 = 0;
            if (plus > 0) {
                max1 = 9 - +firstTerm[i];
            } else {
                max1 = +firstTerm[i] - 1;
            }
            const element = getRandomIntInclusive(min1, max1);
            termString.push(element);
        }
        termString.forEach(el => term += el.toString());
        term = +term * plus;
    } while ( (prevResult + term) < min || (prevResult + term) > max)


    return term;
}