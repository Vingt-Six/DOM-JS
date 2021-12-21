let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub : '50%',
    Discord: '15%',
}
// !exo1
let elements = document.querySelector('#liste-soft-skills').querySelectorAll('h2')
console.log(elements);

// !exo2
for (const key in softSkills) {
    elements.forEach(e => {
        if (e.innerText == key) {
            tab = e
            tab.innerText = key + ' ' + softSkills[key]
        }
    });
    let taille = softSkills[key].length
    let petit = softSkills[key].substr(0, taille -1)
    console.log(petit);
    if (petit < 50) {
        tab.style.background = 'red'
    } else if (petit > 50 && petit < 100) {
        tab.style.background = 'green'
        tab.style.color = 'white'
    } else if (petit == 100) {
        tab.style.background = 'gold'
    }
}