const user= {

    name:'Uday',
    age:25,

  address:{
     city:'Banglore',
     state:'Karnataka',
  }

}

// const name = user.name;
// const age= user.age;
// console.log(name,age);

const {name, age} = user;
console.log(name);
console.log(age);



/*  User dependent Variable Creation...  */

// const {name:userName,age:userAge}=user;
// console.log(userName);
// console.log(userAge);

// const {address:{city,state} }=user;
// console.log(city);
// console.log(state);

// const {address}=user;
// const {city}= address;
// console.log(city);