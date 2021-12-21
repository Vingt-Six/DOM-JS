//1
let div = document.getElementsByTagName('div')[2];
console.log(div);
let first = div.firstElementChild
console.log(first);

//2
let last = div.lastElementChild
console.log(last);

//3
let para = div.getElementsByTagName("p")[0]
let paraI = para.getElementsByTagName('i')[0]
console.log(paraI);

// //Correction //3
// console.log(div.firstElementChild.nextElementSibling.firstElementChild);

//4
let lastPara = div.getElementsByTagName('p')[1]
let paraB = lastPara.getElementsByTagName('b')[0]
console.log(paraB);

//5
let parI = paraI.parentElement
console.log(parI);

//6
let parB = paraB.parentElement
console.log(parB);

//7
let second = first.nextElementSibling
console.log(second);