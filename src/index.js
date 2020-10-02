import './css/style.css';
import { getParams } from './getParams';
import { renderAction, renderExcersises } from './render';



const startGame = () => {
    const params = getParams()
    renderAction(params.action)
    renderExcersises([5, 6, 6, 11, 14, 20])
    console.log(params)
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.start').addEventListener('click', startGame)
})

