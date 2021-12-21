//1
let h3 = document.getElementsByTagName('h3')[0]
console.log(h3);

//2
let tn3 = document.getElementById('titreNiv3')
console.log(tn3);

//3
console.log(tn3.previousElementSibling);

//4
let nextPara = document.getElementsByClassName('petitParagraphe')[0].nextElementSibling
console.log(nextPara);

//5
let imp = document.getElementsByTagName('li')[0].parentElement
console.log(imp);

//6
let fChild = document.getElementsByTagName('ul')[0].parentElement.firstElementChild
console.log(fChild);

// //7
// let lastImp = document.getElementsByTagName('ul')[document.getElementsByClassName('important').length-1].nextElementSibling
// console.log(lastImp);

//8
let succ = document.getElementsByTagName('p')[3].nextElementSibling.nextElementSibling
console.log(succ);

//9
let span = document.getElementsByTagName('span')[1].parentElement.nextElementSibling
console.log(span);

//10
let nico = document.getElementsByTagName('b')[2].parentElement.parentElement.previousElementSibling.lastElementChild.lastElementChild
console.log(nico);

//11
let no = document.querySelector('.grandParagraphe')
console.log(no);

//12
let allNo = document.querySelectorAll('li')
allNo.forEach(element => {
    console.log(element);
});