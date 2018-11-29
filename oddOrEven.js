var question1 = 'what is your ';
var question2 = prompt('question age/name');
var question = question1 + question2 + '?';             choose age or name
var answer = prompt(question);
alert('welcome to my website '+answer ); 


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
