export const getParams = () => {
    const actions = document.querySelectorAll('input[name="actType"]')
    let action
    actions.forEach(el => {
        if (el.checked === true) action = el.value
    })
    return {
        numOfTerms: +document.getElementById('numOfTerms').value,
        action
    }
}