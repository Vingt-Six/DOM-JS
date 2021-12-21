// !exo1
let div = document.getElementById('content')

div.addEventListener('click', function(e){
    if (e.target.tagName == 'DIV') {
        e.target.setAttribute('style', 'border: solid purple')
    } else if (e.target.tagName == 'P') {
        e.target.setAttribute('style', 'color: red; font-weight: bold;')
    } else if (e.target.tagName == 'H1') {
        e.target.setAttribute('style', 'background-color: #1ECE90; width: 12%')
    } else if (e.target.tagName == 'H2') {
        e.target.innerText = e.target.innerText.substr(0,e.target.innerText.length -1)
    }
})

// !exo2
let text = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"
let para = document.querySelectorAll('p')[1]
let section = document.querySelector('section')

section.style = 'height: 50px;'

section.addEventListener('mouseover', function(){
    para.innerText = text
    section.addEventListener('mouseout', function(){
        para.innerText = ''
    })
})