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
