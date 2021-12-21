//1
let h2 = document.querySelector('h2')
console.log(h2.innerText);

//2
h2.innerText = 'Exercice 1'
console.log(h2.innerText);

//3
let p = h2.nextElementSibling
p.innerText = 'Exercice 1'
console.log(p.innerText);

//4
let section = document.querySelector('section')
console.log(section.id);

//5
let h1 = document.querySelector('h1')
console.log(h1.className);
console.log(h1.classList);

//6
let allh1 = document.querySelectorAll('h1')
allh1.forEach(element => {
    console.log(element.className);
});

//7
let input = document.querySelector('input')
console.log(input.attributes);

//8
console.log(input.getAttribute('type'));

//9
let inputId = document.querySelector('#inputPassword3')
inputId.setAttribute('type', 'password')
console.log(inputId);

//10
input.setAttribute('type', 'color')
console.log(input);