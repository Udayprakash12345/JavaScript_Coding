const user= {

    name:'Uday Prakash',
    age:27,

    address: {
        city:'Banglore',
        state:'Karnataka'
    }

}

// function intro(userObj){
//     console.log(userObj);
// }
// intro(user);

function intro({age,name}){
    console.log(name, age);
}
intro(user);