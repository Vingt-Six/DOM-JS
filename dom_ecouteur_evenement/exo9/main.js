// !exo1
let li = Array.from(document.querySelector('ul').children)

// li.forEach(element => {
//     element.addEventListener('click', function(){
//         alert(element.innerText)
//     })
// });

// !exo2
li.forEach(element => {
    element.addEventListener('dblclick', function(){
        element.innerText = prompt('change moi') 
    })
});

// !exo3
let input = document.getElementsByTagName('input')[0]
let input1 = document.getElementsByTagName('input')[1]
let btn = document.getElementsByTagName('input')[2]
let valeur1, valeur2, temp;
btn.addEventListener('click', function(){
    li.forEach(e => {
        if (e.innerText == input.value) {
            valeur1 = e;
        } else if (e.innerText == input1.value) {
            valeur2 = e;
        }
    });
    temp = valeur1.innerText
    valeur1.innerText = valeur2.innerText
    valeur2.innerText = temp
})