//1
// let myBody = document.getElementsByTagName('body')[0]
// console.log(myBody);

//Correction //1
let myBody = document.body
console.log(myBody);

//2
let firstElement = myBody.firstElementChild
console.log(firstElement);

//3
let lastElement = myBody.lastElementChild
console.log(lastElement);

//4
let firstDiv = document.querySelector('div')
console.log(firstDiv.children);

//5
let firstLi = document.getElementsByTagName('li')[0]
let second = firstLi.nextElementSibling
console.log(firstLi);
console.log(second);

//6
let secondLi = document.getElementsByTagName('li')[1]
let first = secondLi.previousElementSibling
console.log(secondLi);
console.log(first);