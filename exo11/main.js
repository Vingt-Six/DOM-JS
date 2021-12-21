let myObject = {
    nom: 'nicolas',
    age: 18,
}

//1
let div = Array.from(document.querySelector('#object').children)
console.log(div);

//2
let tab = Object.keys(myObject)
console.log(tab);

//3
for (key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
}

//4
// console.clear()
let dedans = Object.entries(myObject)
for (key in dedans) {
    console.log(`${dedans[key]}`);
}

//5
for (key in dedans) {
    console.count(dedans[key]);
}

//6
let i = 0
for (key in div) {
    console.log(div[i]);
    i++
}