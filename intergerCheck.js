// function fizzBuzz(n){
//     /* for (let i = 0; i < n.length; i++) {
//         const element = n[i];
//         if (element%3 == 0 && element%5 == 0){
//             console.log('FizzBuzz');
//         }
//         if(element%3 == 0 && element%5 != 0){
//             console.log('Fizz');
//         }
//         if(element%5 == 0 && element%3 != 0){
//             console.log('Buzz');
//         }
//         if(element%5 != 0 && element%3 != 0){
//             console.log(element)
//         }
//     } */
//     if (n%3 == 0 && n%5 == 0){
//         console.log('FizzBuzz');
//     }
//     if(n%3 == 0 && n%5 != 0){
//         console.log('Fizz');
//     }
//     if(n%5 == 0 && n%3 != 0){
//         console.log('Buzz');
//     }
//     if(n%5 != 0 && n%3 != 0){
//         console.log(n)
//     }
// }

function fizzBuzz(n) {
    // Write your code here
    for(let i = 0; i<=n; i++){
        if (i%3 == 0 && i%5 == 0){
        console.log('FizzBuzz');
    }
    if(i%3 == 0 || i%5 != 0){
        console.log('Fizz');
    }
    if(i%5 == 0 || i%3 != 0){
        console.log('Buzz');
    }
    if(i%5 != 0 && i%3 != 0){
       console.log(i)
    }
}

}
console.log (fizzBuzz(10));