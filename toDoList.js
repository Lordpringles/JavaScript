var tasks = [' 1-code', ' 2-shower', ' 3-do the dishes', ' 4-watch livestream', ' 5-go to bed',];
var progress = ['done', ' in progress', ' to do'];
tasks[tasks.length] = ' 6-wake up';

alert('choose a task from the list below');
var question1 = prompt(tasks);
var question2 = prompt('whats the status of the chosen task? '+progress);
alert('you chose task '+tasks[question1-1]+' status: '+progress[question2-1]);
