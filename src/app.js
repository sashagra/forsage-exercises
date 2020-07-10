import {promptGameOptions, btnAddListerers} from './interface';
import {makeExercises} from './makeExercises';
import {orders, ordersArr} from './orders';

let options = promptGameOptions();
makeExercises(options.DIGITS, options.NUM_OF_TERMS, orders);


btnAddListerers({
    restartFunc() {
        const orders = {
            'ten': [],
            'five': []
        }
        makeExercises(options.DIGITS, options.NUM_OF_TERMS, orders);
    },
    newGameFunc()  {
        options = promptGameOptions();
        makeExercises(options.DIGITS, options.NUM_OF_TERMS, orders);
    }
})
