// // !exo1
// let input = document.getElementsByTagName('input')[0]

// input.addEventListener('focus', function(){
//     input.style.backgroundColor = '#5499C7'
// })

// // !exo2
// let inputTwo = document.getElementsByTagName('input')[1]

// inputTwo.addEventListener('focus', function(){
//     inputTwo.style.backgroundColor = '#5499C7'
//     inputTwo.addEventListener('focusout', function() {
//         inputTwo.style = 'none'
//     })
// })

// // !exo3
// let firstP = document.getElementsByClassName('premierParagraphe')[0]
// let secondP = document.getElementsByClassName('secondParagraphe')[0]
// let thirdP = document.getElementsByClassName('dernierParagraphe')[0]
// let btn = document.getElementsByClassName('buttonExo')[0]

// btn.addEventListener('click', function(){
//     firstP.innerText = secondP.innerText
//     thirdP.innerText = secondP.innerText
// })

// // !exo4
// let btn2 = document.getElementsByClassName('buttonExo')[1]
// let rename = document.getElementsByClassName('form-control')[0]
// let para = document.querySelector('#exo4')

// btn2.addEventListener('click', function(){
//     para.innerText = rename.value
// })

// // !exo5
// let btncopy = document.querySelectorAll('button')[2]
// let chemin = document.querySelectorAll('p')[4]
// chemin = chemin.innerText.slice(9)
// let img = document.getElementsByTagName('img')[0]

// btncopy.addEventListener('click', function(){
//     img.src = chemin
// })

// // !exo6
// let imgcopy = document.getElementsByTagName('img')[1]
// let imgpast = document.getElementsByTagName('img')[2]
// let copy;

// imgcopy.addEventListener('click', function(){
//     copy = imgcopy.src
//     imgpast.addEventListener('click', function(){
//         imgpast.src = copy
//     })
// })

// // !exo7
// let change = document.querySelectorAll('button')[3]
// let txt1 = document.querySelectorAll('p')[5]
// let txt2 = document.querySelectorAll('p')[6]
// let temp;


// change.addEventListener('click', function(){
//     temp = txt1.innerText
//     txt1.innerText = txt2.innerText
//     txt2.innerText = temp
// })

// exo1
let exo1 = document.getElementsByTagName('input')[0]

exo1.addEventListener('focus', function(){
    exo1.style = 'background-color: skyblue;'
})

// exo2
let exo2 = document.getElementsByTagName('input')[1]

exo2.addEventListener('focus', function(){
    exo2.style = 'background-color: purple;'
    exo2.addEventListener('focusout', function(){
        exo2.style = 'none'
    })
})

// exo3
let exo3 = document.getElementsByTagName('button')[0]
let p1 = document.getElementsByTagName('p')[0]
let p2 = document.getElementsByTagName('p')[1]
let p3 = document.getElementsByTagName('p')[2]

exo3.addEventListener('click', function(){
    p1.innerText = p2.innerText
    p3.innerText = p2.innerText
})

// exo4
let exo4 = document.querySelector('#exo4')
let changeInput = document.getElementsByTagName('input')[2]
let rename = document.getElementsByTagName('button')[1]

rename.addEventListener('click', function(){
    exo4.innerText = changeInput.value
})

// exo5
let exo5 = document.getElementsByTagName('p')[4]
let btn = document.getElementsByTagName('button')[2]
let img = document.getElementsByTagName('img')[0]

exo5 = exo5.innerText.replace('Chemin : ', '')

btn.addEventListener('click', function(){
    img.src = exo5
})

// exo6
let img1 = document.getElementsByTagName('img')[1]
let img2 = document.getElementsByTagName('img')[2]
let copie;

img1.addEventListener('click', function(){
    copie = img1.src
    img2.addEventListener('click', function(){
        img2.src = copie
    })
})

// exo7
let exo7 = document.getElementsByTagName('button')[3]
let para1 = document.getElementsByTagName('p')[5]
let para2 = document.getElementsByTagName('p')[6]

exo7.addEventListener('click', function(){
    let temp = para1.innerText
    para1.innerText = para2.innerText
    para2.innerText = temp
})