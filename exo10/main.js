//1
let h1 = document.querySelector('h1')
h1.innerText = "Les attributs class et id"

//2
let h2 = document.querySelector('h2')
h2.innerText = "Exercice 2 partie A"

//3
let second = document.getElementsByTagName('h2')[1]
second.innerText = "Exercice 2 partie B"

//4
let p = document.querySelector('p')
p.innerHTML = `L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>`

//5
let secondP = document.getElementsByTagName('p')[1]
secondP.innerHTML = `La manipulation de l'attribut Style peut-être une <i>solution</i> rapide`

//6
p.id = 'bigTitle'

//7
let div = document.querySelector('div')
div.className = 'container'

//8
let allH2 = document.querySelectorAll('h2')
allH2.forEach(element => {
    element.className = 'title'
});

//9
let allP = document.querySelectorAll('p')
allP.forEach(element => {
    element.className = 'text'
});

//10
let section = document.querySelector('section')
section.className = 'margin-bottom border-black padding'

//11
let section2 = document.getElementsByTagName('section')[1]
section2.className = 'margin-top border-black padding'

//12
let divSection = section2.lastElementChild
divSection.setAttribute('style', 'height: 20px; width: 20px; border: solid black 2px; background-color: green;')