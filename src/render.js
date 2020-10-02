const actionHeader = document.getElementById('action')
const termBlock = document.getElementById('exercise')

export const renderAction = actionText => {
    const actionsDisplay = {
        multiply: "Умножаем",
        divide: "Делим",
        pow: "Возводим в квадрат",
        sqrt: "Извлекаем квадратный корень"
    }
    actionHeader.innerText = actionsDisplay[actionText]
}

export const renderExcersises = exercise => {
    function recursion(iterator) {
        if (iterator < exercise.length) {
            console.log(iterator)
            termBlock.innerText = exercise[iterator]
            setTimeout(() => {
                termBlock.innerText = ''
                setTimeout(() => {
                    recursion(++iterator)
                }, 500)
            }, 1000)
        }
    }
    recursion(0)
}