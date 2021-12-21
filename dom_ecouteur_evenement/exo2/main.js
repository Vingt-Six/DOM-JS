// !exo1
let h1 = document.querySelector('h1')

h1.addEventListener('dblclick', function(){
    h1.className = 'titre'
})

// !exo2
let h3 = document.querySelector('h3')

h3.addEventListener('mouseover', function(){
    h3.innerText = `${h3.innerText.substr(0, h3.innerText.length-1)}`
})

// !exo3
let p = document.querySelector('p')
p.className = 'paragraphe'

p.addEventListener('click', function(){
    if (p.className == 'paragraphe') {
        p.className = 'para'
    } else {
        p.className = 'paragraphe'
    }
})