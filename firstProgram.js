
document.write("Hello World!");
// alert("Hello again");
console.log('just testing the console');
console.log('does this actually work?');
console.error('YOU ARE STUPID');
console.warn('not that stupid tho');
console.log('%c Hello World ','color: yellow;background:purple');

/*
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
                                                                                                    sum of 2 numbers is odd or even
if (total % 2 === 0){
    console.log('the total of '+a+' + '+b+' is '+total+' and it\'s an even number');
}else if (total % 2 !== 0){
    console.log('the total of '+a+' + '+b+' is '+total+' and it\'s an odd number');
}else{
    console.log('invalid number')
}


var tasks = [' 1-code', ' 2-shower', ' 3-do the dishes', ' 4-watch livestream', ' 5-go to bed',];
var progress = ['done', ' in progress', ' to do'];
tasks[tasks.length] = ' 6-wake up';
                                                                                                                    to do list
alert('choose a task from the list below');
var question1 = prompt(tasks);
var question2 = prompt('whats the status of the chosen task? '+progress);
alert('you chose task '+tasks[question1-1]+' status: '+progress[question2-1]);
*/

var animals = ['dog', 'cat', 'snake', 'dinossaur', 'fly'];
random = (Math.ceil(Math.random() *Number(animals.length))); 
var answer = prompt('Can you guess which number the animal '+animals[random-1]+' belongs to? (1-5)');
if (answer == random && (answer  >= 1 && answer <= 5)){
    alert('Congratulations, you guessed right');
} else if (answer != random && (answer  >= 1 && answer <= 5)){
    alert('Too bad, you guessed wrong');
} else {
    alert('Invalid option');
}
