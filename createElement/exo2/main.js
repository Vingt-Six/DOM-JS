// !exo1
let btn = document.getElementsByTagName('input')[0]
let btn1 = document.getElementsByTagName('input')[1]
let btn2 = document.getElementsByTagName('input')[2]
let ul = document.getElementsByTagName('ul')[0]

btn.addEventListener('click', function(){
    ul.removeChild(ul.firstChild)
})

// !exo2
btn1.addEventListener('click', function(){
    ul.removeChild(ul.lastChild)
})

// !exo3
btn2.addEventListener('click', function(){
    ul.removeChild(ul.children[Math.floor(Math.random() * (ul.children.length))])
})

// !exo4
let exo4 = document.getElementsByTagName('ul')[1]
let btn3 = document.getElementsByTagName('input')[3]
let li = document.createElement('li')
li.innerText = 'Fatigué'

btn3.addEventListener('click', function(){
    exo4.replaceChild(li, exo4.children[1])
})

// !exo5
let exo5 = document.getElementsByTagName('input')[4]
let btnswitch = document.getElementsByTagName('input')[5]
let liswitch = document.createElement('li')

btnswitch.addEventListener('click', function(){
    liswitch.innerText = exo5.value
    exo4.replaceChild(liswitch, exo4.children[2])
})