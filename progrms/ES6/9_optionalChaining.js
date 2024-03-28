const user={
    name:'Uday',
    age:26,

    address:{
       city:'Banglore'
    }

}

// if(user.address){
//     console.log(user.address.city);
// }


// console.log(user.address && user.address.city);


/*  option chaining example... */
console.log(user?.address?.city);