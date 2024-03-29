const user={
    firstName:'Uday',
    lastName:'Prakash',

    address:{
       city:'Banglore'
    },

    getFullName:function(){
        return user.firstName + ' ' + user.lastName;
    }

}

const a='city';

// if(user.address){
//     console.log(user.address.city);
// }


// console.log(user.address && user.address.city);


/*  option chaining example... */
// console.log(user?.address?.city);

// console.log(user.address?.[a]);

console.log(user.getFullName?.());