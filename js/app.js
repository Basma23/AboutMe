'user strict'
var uName = prompt('Wellcome to my website, what\'s your name?');
console.log(uName);
alert('Nice to see you here '+uName);
console.log('Nice to see you here '+uName+', and wellcome again');
alert('Now, I\'ll give you some quistions to let us know how much you are knowing us.');
console.log('Now, I\'ll give you some quistions to let us know how much you are knowing us.');
var Q1 = prompt('Are you ready?');
console.log(Q1);
switch(Q1.toLocaleLowerCase()){
    case 'yes':
       alert('OK, '+uName+' let\'s go :)');
       console.log('OK, '+uName+'\'s said '+Q1+'. let\'s go :)');
       break;
    case 'y':
        alert('OK, '+uName+' let\'s go :)');
        console.log('OK, '+uName+'\'s said '+Q1+'. let\'s go :)');
        break;
    case 'no':
        alert('Oh my friend, you are boring. Did you say '+Q1+'. Come on, let\'s just do it. OK');
        console.log('Oh my friend, you are boring. Did you say '+Q1+'. Come on, let\'s just do it. OK');  
        break; 
    case 'n':
        alert('Oh my friend, you are boring. Let\'s just do it OK');
        console.log('Oh my friend, you are boring. Let\'s just do it OK');  
        break;  
}
var Q2 = prompt('Did I complete my Bachelor\'s study?');
console.log(Q2);
switch(Q2.toLocaleLowerCase()){
    case 'yes':
       alert('You said '+Q2+', but unforcionatly no :(');
       console.log('You said '+Q2+', but unforcionatly no :(');
       break;
    case 'y':
       alert('You said '+Q2+', but unforcionatly no :(');
       console.log('You said '+Q2+', but unforcionatly no :(');
       break;
    case 'no':
        alert('You said '+Q2+', and you guessed it');
        console.log('Great job :). You said '+Q2+', and you guessed it');  
        break; 
    case 'n':
        alert('You said '+Q2+', and you guessed it');
        console.log('Great job :). You said '+Q2+', and you guessed it');  
        break;  
}
var Q3 = prompt('Do I love coffee?');
console.log(Q3);
switch(Q3.toLocaleLowerCase()){
    case 'yes':
       alert('You said '+Q3+', but unforcionatly no :(');
       console.log('You said '+Q3+', but unforcionatly no :(');
       break;
    case 'y':
       alert('You said '+Q3+', but unforcionatly no :(');
       console.log('You said '+Q3+', but unforcionatly no :(');
       break;
    case 'no':
        alert('You said '+Q3+', and you guessed it');
        console.log('Great job :). You said '+Q3+', and you guessed it');  
        break; 
    case 'n':
        alert('You said '+Q3+', and you guessed it');
        console.log('Great job :). You said '+Q3+', and you guessed it');  
        break;  
}
var Q4 = prompt('can I solve Sudoku game?');
console.log(Q4);
switch(Q4.toLocaleLowerCase()){
    case 'yes':
       alert('You said '+Q4+', and you guessed it');
       console.log('Great job :). You said '+Q4+', and you guessed it');
       break;
    case 'y':
       alert('You said '+Q4+', and you guessed it');
       console.log('Great job :). You said '+Q4+', and you guessed it');
       break;
    case 'no':
        alert('You said '+Q4+', but actually yes I can :)');
        console.log('You said '+Q4+', but actually yes I can :)');  
        break; 
    case 'n':
        alert('You said '+Q4+', but actually yes I can :)');
        console.log('You said '+Q4+', but actually yes I can :)');  
        break;  
}
var Q5 = prompt('can I solve Rubik\'s Cube?');
console.log(Q5);
switch(Q5.toLocaleLowerCase()){
    case 'yes':
       alert('You said '+Q5+', and you guessed it');
       console.log('Great job :). You said '+Q5+', and you guessed it');
       break;
    case 'y':
       alert('You said '+Q5+', and you guessed it');
       console.log('Great job :). You said '+Q5+', and you guessed it');
       break;
    case 'no':
        alert('You said '+Q5+', but actually yes I can :)');
        console.log('You said '+Q5+', but actually yes I can :)');  
        break; 
    case 'n':
        alert('You said '+Q5+', but actually yes I can :)');
        console.log('You said '+Q5+', but actually yes I can :)');  
        break;  
}
alert('Thank you very much, '+uName+'. I felt fun with you :). Now you can see the information about me :). Have a great time :)');
console.log('Thank you very much, '+uName+'. I felt fun with you :). Now you can see the information about me :). Have a great time :)');