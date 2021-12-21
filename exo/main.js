//1
let tagname = document.getElementsByTagName("h1")
console.log(tagname);

//2
let para = document.getElementsByTagName('p')
console.log(para);
let sous_titre = document.getElementsByTagName('h3')
let sous1 = sous_titre[0]
let sous2 = sous_titre[1]
let sous3 = sous_titre[2]
console.log(sous1);
console.log(sous2);
console.log(sous3);

//Correction //2
let h3_1 = document.getElementsByTagName('h3')[0]
let h3_2 = document.getElementsByTagName('h3')[1]
let h3_3 = document.getElementsByTagName('h3')[2]
console.log(h3_1, h3_2, h3_3);

//3
let para = document.getElementsByTagName('p')
let second = para[1]
console.log(second);

//4
let list = document.getElementsByTagName('li')
let troisli = list[2]
console.log(troisli);