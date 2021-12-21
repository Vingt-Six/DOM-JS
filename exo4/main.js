//1
let h1 = document.getElementsByTagName('h1')[1]
let texth1 = h1.innerText
console.log(texth1);

//2
let li = document.getElementsByTagName('ul')[0]
let textli = li.lastElementChild.innerText
console.log(textli);

//3
let para = document.getElementsByTagName('p')[0]
let textpara = para.innerText.toUpperCase()
console.log(textpara);

//4
let ul = document.querySelectorAll('li')
ul.forEach(element => {
    console.log(element.innerText.toUpperCase());
});