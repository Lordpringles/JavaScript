
var a = prompt('type in a number');
var b = prompt('type in another number');
a = Number(a);
b = Number(b);
var total = a + b;

if (total % 2 === 0){
    console.log('the total of '+a+' + '+b+' is '+total+' and it\'s an even number');
}else if (total % 2 !== 0){
    console.log('the total of '+a+' + '+b+' is '+total+' and it\'s an odd number');
}else{
    console.log('invalid number')
}
