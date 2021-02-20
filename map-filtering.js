const numbers = [2, 3, 4, 5, 6, 7, 8, 9]
/* const output = [];

for (let i = 0; i<numbers.length; i++){
    const input = numbers[i];
    const result = input * input;
    output.push(result);
} */
// function square(element){
//     return element*element;
// }
// const result=numbers.map(square);
// console.log(result);
/* numbers.map(function(element, index, array){
    console.log( element,index);
}) */
/* const result = numbers.map(element=>element*element);
console.log(result); */
// const result = numbers.filter(num=>num<6)
const result = numbers.find(num=>num>6)
console.log(result);
// console.log(output);