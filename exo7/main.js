//1
let divId = document.querySelector('#content')
console.log(divId);

//2
let divAllId = document.querySelectorAll('#content')
console.log(divAllId);

//3
let ImpLi = document.querySelector('.important')
console.log(ImpLi);

//4
let all = document.querySelectorAll('.important')
console.log(all);

//5
let boucle = document.querySelectorAll('li')
boucle.forEach(e => {
    console.log(e.innerText.slice(0, -1).toLowerCase() + e.innerText.charAt(e.innerText.length -1).toUpperCase());
});

//6
let p = document.getElementById("content").getElementsByClassName('grandParagraphe')[0]
console.log(p);