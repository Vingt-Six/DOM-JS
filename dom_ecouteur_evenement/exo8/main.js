// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"


// exo1
let div = document.querySelector('div')
let tab = Array.from(div.children)

tab.forEach(element => {
    element.addEventListener('click', function(e){
        console.log(e.target);
    })
});

// exo2
div.addEventListener('dblclick', function(e){
    e.target.innerText = e.target.innerText.toUpperCase();
})

// exo3
let alea = ["border: 1px solid gold;","background-color: blue;","background-color: red;","border: 5px dotted gold;"]
let btn = document.querySelector('input')

btn.addEventListener('click', function(){
    tab.forEach(element => {
        element.style = alea[Math.floor(Math.random()* alea.length)]
    });
})