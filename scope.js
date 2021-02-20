function scope(first, second){
    const result = first+second;
    return result;
}
const output = scope(5,3);
console.log(output);
/*
// array sum for Hackerrank
 function simpleArraySum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        result = result + element;
    }
    return result;
}
const inputs = simpleArraySum([1,2,3,4,10,11]);
console.log(inputs) */