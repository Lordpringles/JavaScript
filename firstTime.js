let firstName = 'Natal';
let lastName = 'Baja';

const fullName = `${firstName} ${lastName}`;
console.log(firstName +' '+ lastName);
console.log(fullName);
console.log(fullName.trim().length);
console.log(fullName.toUpperCase());
console.log(fullName.split(' '));
console.log(typeof fullName);



let num = 7.77;
console.log(typeof num);
console.log(parseInt(num));
console.log(parseFloat(num));
console.log(num.toFixed(3));

let example = [5,7,10];
example.push(8,2)
example.pop();
example[0] = 1;
console.log(example)
example.forEach((element) => {
    console.log(element)
});

let example2 = [...example];
example2.push(11)
console.log(example2);


let justLikeDicts = {
    firstName: 'Natal',
    lastName: 'Baja',
    adress:{
        city:'Canoas',
        state:'Rio Grande do Sul'
    },
    age: 21,
    dogs:['Carminha', 'Lola']
};

console.log(justLikeDicts)
console.log(Object.keys(justLikeDicts));
console.log(Object.values(justLikeDicts));
