const colors = ['red', 'blue', 'green', 'yellow', 'pink'];

// const col1=colors[0];
// const col2= colors[1];
// const col3= colors[2];
// console.log(col1);


const [color1,color2, color3]=colors;
console.log(color1,color2,color3);

// Direct access value..
// const {3:color4}=colors;
// console.log(color4);

// const [,,,color4]= colors;
// console.log(color4);

// const [,,,,,,color7]= colors;
// console.log(color7);

function printColor([a,b,,d]){
    console.log(a,b,d);
}
printColor(colors);


