const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[2],[3]);

marvel_heros.concat(dc_heros);
// console.log(marvel_heros);

// const allheros = marvel_heros.concat(dc_heros);
// console.log(allheros);

const new_all_heros =[...marvel_heros, ...dc_heros];
// console.log(new_all_heros);


const another_array = [1,2,3,[4,5,6],7,[8,[4,5]]];
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("Ankita"));
console.log(Array.from("Ankita"));
// console.log(Array.from({name : "Ankita"}));   //intresting


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));










