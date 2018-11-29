
document.write("Hello World!");
// alert("Hello again");
console.log('just testing the console');
console.log('does this actually work?');
console.error('YOU ARE STUPID');
console.warn('not that stupid tho');
console.log('%c Hello World ','color: yellow;background:purple');


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
