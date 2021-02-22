const nums = [1,-2,4,5,-8,9,-12,19,16]
for (let i =0; i<nums.length; i++){

    // ignore Negative values in Array

    /* if (nums[i]<0){
        continue;
    } */
    // ignore index grater than 5 values in Array
    
    if (nums[i]>5){
        break;
    }
    console.log(nums[i]);
}