import {promptGameOptions, btnAddListerers} from './interface';
import {makeExercises} from './makeExercises';
import {orders} from './orders';

const {DIGITS, NUM_OF_TERMS} = promptGameOptions();
makeExercises(DIGITS, NUM_OF_TERMS, orders);


btnAddListerers({
    restartFunc() {
        orders.with10 = ['without10']
        makeExercises(DIGITS, NUM_OF_TERMS, orders);
    },
    newGameFunc()  {
        const options = promptGameOptions();
        const {DIGITS, NUM_OF_TERMS} = options
        makeExercises(DIGITS, NUM_OF_TERMS, orders);
    }
})
