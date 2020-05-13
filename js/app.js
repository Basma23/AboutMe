'user strict'

var uName = prompt('Wellcome to my website, what\'s your name?');
console.log('Wellcome to my website, what\'s your name? Your name\'s: '+uName);
alert('Nice to see you here '+uName);
console.log('Nice to see you here '+uName+', and wellcome again');
alert('Now, I\'ll give you some quistions to let us know how much you are knowing us.');
console.log('Now, I\'ll give you some quistions to let us know how much you are knowing us.');

function gis1(){
var Q1 = prompt('Are you ready?').toLocaleLowerCase();
console.log(Q1);
switch (Q1){
    case 'yes':
    case 'y':
       alert('OK, '+uName+' let\'s go :)');
       console.log('OK, '+uName+'\'s said '+Q1+'. let\'s go :)');
       break;
    case 'no':
    case 'n':
        alert('Oh my friend, you are boring. Did you say '+Q1+'. Come on, let\'s just do it. OK');
        console.log('Oh my friend, you are boring. Did you say '+Q1+'. Come on, let\'s just do it. OK');  
        break; 
}};

function gis2(){
var Q2 = prompt('Did I complete my Bachelor\'s study?').toLocaleLowerCase();
console.log(Q2);
switch (Q2){
    case 'yes':
    case 'y':
       alert('You said '+Q2+', but unforcionatly no :(');
       console.log('You said '+Q2+', but unforcionatly no :(');
       break;
    case 'no':
    case 'n': 
        alert('You said '+Q2+', and you guessed it');
        console.log('Great job :). You said '+Q2+', and you guessed it');  
        break; 
}};

function gis3(){
var Q3 = prompt('Do I love coffee?').toLocaleLowerCase();
console.log(Q3);
switch (Q3){
    case 'yes':
    case 'y':
       alert('You said '+Q3+', but actually no :(');
       console.log('You said '+Q3+', but actually no :(');
       break;
    case 'no':
    case 'n':
        alert('You said '+Q3+', and you guessed it');
        console.log('Great job :). You said '+Q3+', and you guessed it');  
        break;  
}};

function gis4(){
var Q4 = prompt('can I solve Sudoku game?').toLocaleLowerCase();
console.log(Q4);
switch (Q4){
    case 'yes':
    case 'y':    
       alert('You said '+Q4+', and you guessed it');
       console.log('Great job :). You said '+Q4+', and you guessed it');
       break;
    case 'no':
    case 'n':
        alert('You said '+Q4+', but actually yes I can :)');
        console.log('You said '+Q4+', but actually yes I can :)');  
        break; 
    case 'n': 
}};

function gis5(){
var Q5 = prompt('can I solve Rubik\'s Cube?').toLocaleLowerCase();
console.log(Q5);
switch (Q5){
    case 'yes':
    case 'y':    
       alert('You said '+Q5+', and you guessed it');
       console.log('Great job :). You said '+Q5+', and you guessed it');
       break;
    case 'no':
    case 'n':    
        alert('You said '+Q5+', but actually yes I can :)');
        console.log('You said '+Q5+', but actually yes I can :)');  
        break; 
}};

function gis6(){
    for(var i = 0; i<=3; i++){
        var Q6 = prompt('Can you giss my age? Let\'s try');
        console.log('Can you giss my age? Let\'s try');
        if (Q6 < 23){
            alert('You said '+Q6+', and it\'s too low :(');
            console.log('You said '+Q6+', and it\'s too low :(');
        } else if (Q6 > 23){
            alert('You said '+Q6+', and it\'s too high');
            console.log('You said '+Q6+', and it\'s too high :(');
        } else if (Q6 == 23){
            alert('Alright, my age is  '+Q6+', and you\'ve guessed it :)');
            console.log('Alright, my age is  '+Q6+', and you\'ve guessed it :)');
            break;
        }
    }
};


var dishes = ['yallengi','fettuccini alfredo','shawarma','zinger','fahita','pizza','biryani','kabsa','maqluba','mansaf'];
console.log(dishes);

var newDishes = [];
console.log(newDishes);

function gis7(){
    // var Q7;
    for (var i = 0; i<=5; i++){
        var Q7 = prompt('What\'s my favorate dishes do you think?').toLowerCase();
        newDishes.push(Q7);
        // console.log(i + 1 + ' ' + newDishes);
            if (dishes.includes(Q7)){
                alert ('You\'ve gussted it. '+ Q7 +' is one of my favorate dish :).');
                console.log ('You\'ve gussted it. '+ Q7 +' is one of my favorate dish :).');
                break;
            }else if (!dishes.includes(Q7)){
                alert('You said '+Q7+', and it\'s not my favorate dish :(. Try again :)');
                console.log('You said '+Q7+', and it\'s not my favorate dish :(. Try again :)');
            }
}};

gis1();
gis2();
gis3();
gis4();
gis5();
gis6(); 
gis7();

alert(`your answers were: ${newDishes}`);

alert('Thank you very much, '+uName+'. I felt fun with you :). Now you can see the information about me :). Have a great time :)');
console.log('Thank you very much, '+uName+'. I felt fun with you :). Now you can see the information about me :). Have a great time :)');
