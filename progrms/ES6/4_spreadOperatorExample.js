let num1=[2,3,5,1,6,9];
let num2=[67,89,100];
let joinedArray=[...num2, ...num1];
// console.log(joinedArray);



// let obj1= {
//     firstName:'Uday',
//     lastName: 'Prakash',
//     age:'28',
//     education:'B-Tech',
//     location:'Banglore',

// }

// let obj2={
//     ...obj1,
//     roll:'20',
//     behaviour:'good',
//     firstName:'Mahendra'
// }
// console.log(obj2);


function add(){
    let sum=0;
    for(let i=0; i < arguments.length; i++){
        sum= sum+arguments[i];
    }
    return sum;

}
  console.log( add(...joinedArray) );
  console.log(arguments);