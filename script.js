var question = document.querySelector('#question');
var timerEl = document.querySelector('#timer');
var choices = Array.from(document.querySelectorAll('choice-text'));
var scoreEl = document.querySelector('#score');

let questions = [
    {
        question: 'What is the extention for a JavaScript file?',
        choice1: '.html',
        chioce2: '.css',
        choice3: '.net',
        choice4: '.js',
        answer: 4,
},
{
    question: 'Inside which HTML element do we put the JavaScript?',
    choice1: '<javascript>',
    chioce2: '<js>>',
    choice3: '<script>',
    choice4: '<scripting>',
    answer: 3,
},
{
    question: 'How do you call a function named "myFunction"?',
    choice1: 'call myFunction()',
    chioce2: 'myFunction()',
    choice3: 'call fundtion myFunction',
    choice4: 'Call.myFunction()',
    answer: 2,
},
{
    question: 'How can you add a comment in JavaScript?',
    choice1: '//This is a comment',
    chioce2: '*This is a comment',
    choice3: '<!--This is a comment-->',
    choice4: '#This is a comment',
    answer: 1,
},
{
    question: 'In JavaScript, the symbols + = * and / are:',
    choice1: 'operators',
    chioce2: 'expressions',
    choice3: 'comparison operators',
    choice4: 'decoration',
    answer: 1,
},
]