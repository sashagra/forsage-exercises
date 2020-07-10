import {promptGameOptions, btnAddListerers} from './interface';
import {makeExercises} from './makeExercises';
import {orders, ordersArr} from './orders';

const {DIGITS, NUM_OF_TERMS} = promptGameOptions();
makeExercises(DIGITS, NUM_OF_TERMS, orders);


btnAddListerers({
    restartFunc() {
        const orders = {
            'ten': [],
            'five': []
        }
        makeExercises(DIGITS, NUM_OF_TERMS, orders);
    },
    newGameFunc()  {
        const options = promptGameOptions();
        const {DIGITS, NUM_OF_TERMS} = options
        makeExercises(DIGITS, NUM_OF_TERMS, orders);
    }
})
