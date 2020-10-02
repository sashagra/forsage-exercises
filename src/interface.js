const btns = document.getElementById('btns');

export const btnAddListerers = func => {
    btns.addEventListener('click', e => func[e.target.id]())
}