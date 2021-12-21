let competences = {
    HTML: '71%',
    CSS: '95%',
    JS : '50%',
    React: '18%',
    Laravel: '100%'
}

// !EXO1
let element = document.querySelector("#liste-competences").querySelectorAll('h2')
console.log(element);

// !EXO2
let i = 0
for (const competence in competences) {
    element[i].innerText += ' ' + competences[competence]
    i++
}