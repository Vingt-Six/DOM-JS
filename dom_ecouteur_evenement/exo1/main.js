// !Exo1
let h1 = document.querySelector('h1')
h1.className = 'titre'

h1.style.color = 'black'

h1.addEventListener('click', function(){
    if (h1.className == 'titre') {
        h1.style.color = 'blue'
    }
})