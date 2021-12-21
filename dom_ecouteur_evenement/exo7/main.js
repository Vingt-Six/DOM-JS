// Pour l'exercice 2
let theColor = "red";
let theBackground = "gold";
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"


// exo1
let btn = document.querySelector('input')
let p = document.querySelector('p')

function leP(x) {
    p.innerText = x
}

btn.addEventListener('click', function(){
    leP(pContent)
})

// exo2
let h1 = document.querySelector('h1')

function color(x,y) {
    h1.style.color = x
    h1.style.backgroundColor = y
}

h1.addEventListener('click', function(){
    color(theColor, theBackground)
})