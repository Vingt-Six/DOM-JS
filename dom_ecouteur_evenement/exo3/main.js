// !exo1
let h1 = document.querySelector('h1')

h1.addEventListener('click', function(){
    h1.className = 'text-blue'
})

// !exo2
let h3 = document.querySelector('h3')

h3.addEventListener('dblclick', function(){
    h3.className = 'text-error'
})

// !exo3
let p = document.querySelector('p')
p.addEventListener('click', function(){
    if (p.className != 'text-style') {
        p.className = 'text-style'
    } else {
        p.className = ' '
    }
})

// !exo4
let p1 = Array.from(document.querySelectorAll('p')[1].children)
console.log(p1);
p1.forEach(e => {
    e.addEventListener('click', function(){
        if (e.className != 'bolder') {
            e.className = 'bolder'
        } else {
            e.className = ' '
        }
    })
});

// !exo5
let p2 = Array.from(document.querySelectorAll('p')[2].children)
console.log(p2);
p2.forEach(e => {
    e.addEventListener('click', function(){
        if (e.className == 'bolder-red') {
            e[1].classList.remove('bolder-red')
            e[2].classList.remove('bolder-red')
        } else if (e.className == 'bolder-red') {
            e[0].classList.remove('bolder-red')
            e[2].classList.remove('bolder-red')
        } else if (e.className == 'bolder-red') {
            e[0].classList.remove('bolder-red')
            e[1].classList.remove('bolder-red')
        }
    e.className = 'bolder-red'
    })
});