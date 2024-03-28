let arr=[1,2,3,4,5];

// function add(...nums){
//     console.log(nums);
//     let sum=0;
//     for(let i=0;i<arguments.length; i++){
//         sum = sum+arguments[i];
//     }
//     return sum;
// }

function add(a,b,...nums){
    console.log(a,b ,nums);
}
add(...arr,12,13,14);