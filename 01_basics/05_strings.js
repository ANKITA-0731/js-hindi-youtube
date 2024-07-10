const name = "ankitathakur";
const repocount = 50

// console.log(name + repocount +  "value");

// console.log('hello my name is $ { name } and my repocount is $ {repocount}'); 

const gameName = new String('ankita-thakur');
console.log(gameName[0]);
console.log(gameName[1]);
// console.log(gameName[2]);
// console.log(gameName[3]);
// console.log(gameName[4]);
// console.log(gameName[5]);
// console.log(gameName[6]);
// console.log(gameName[7]);
// console.log(gameName[8]);
// console.log(gameName[9]);
// console.log(gameName[10]);
// console.log(gameName[11]);
// console.log(gameName[12]);


// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('t'));

const Newstring = gameName.substring(0,5);
console.log(Newstring);

const anotherstring = gameName.slice(-6,4);
console.log(anotherstring);

const NewstringOne = "    Ankita    "
console.log(NewstringOne);
console.log(NewstringOne.trim());

const url = "https://ankita.com/ankita%50thakur"

console.log(url.replace('%50','-'));

console.log(url.includes('ankita'));

console.log(gameName.split('-'));
    




