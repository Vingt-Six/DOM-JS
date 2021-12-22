// !exo1
let div = document.getElementById('content')
let h2 = document.createElement('h2')
h2.innerText = "Part 6 - Exercice 1"
div.appendChild(h2)

// !exo2
let p = document.createElement('p')
p.innerText = 'lorem ipsum'
div.append(p)

// !exo3
let h1 = document.createElement('h1')
h1.innerText = "Le DOM - Création de HTML"
div.prepend(h1)

// !exo4
let secondDiv = document.getElementById('secondaire')
secondDiv.innerHTML = div.innerHTML
secondDiv.children[1].innerText = "Part 6 - Exercice 2"

// !exo5
let laDiv = document.createElement('div')
laDiv.id = 'matiere'
let ol = document.createElement('ol')
for (let i = 0; i < 3; i++) {
    ol.append(document.createElement('li'))
}
ol.children[0].innerText = 'DOM Basic'
ol.children[1].innerText = "DOM Ecouteur d'événement"
ol.children[2].innerText = "DOM Création d'élément"
laDiv.append(ol)
document.body.append(laDiv)