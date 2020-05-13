'user strict'
// set variables
var score = 0;
var uName = prompt(`Welcome in my web page. Tell me waht's your name?`);
console.log(`Welcome in my web page. Tell me waht's your name? ${uName}`);
alert(`Nice to see you here ${uName}, and welcome again`);
console.log(`Nice to see you here ${uName}, and welcome again`);
alert(`let's start with our little quize, and have fun :)`);
console.log(`let's start with our little quize, and have fun :)`);
// set questions
// add functions
function giss1() {
    var Q1 = prompt(`Did I live outside Jordan?`).toLowerCase();
    console.log(`Did I live outside Jordan? ${Q1}.`);
    switch(Q1){
        case 'yes':
        case 'y':
            alert(`Alright, you've gussed it well :)`);
            console.log('Alright, you\'ve gussed it well :)');
            score = score + 1;
            break;
        case 'no':
        case 'n':
            alert(`Actually, I've lived outside for 21 years`);
            console.log('Actually, I\'ve lived outside for 21 years');
    }   
}
function giss2(){
    var Q2 = prompt(`Did I complete my Bachelor's study?`).toLowerCase();
    console.log(`Did I complete my Bachelor's study? ${Q2}.`);
    switch(Q2){
        case 'yes':
        case 'y':
            alert(`Unforcionatly, I couldn't gut it for some reasons :(`);
            console.log('Unforcionatly, I couldn\'t gut it for some reasons :(');
            break;
        case 'no':
        case 'n':
            alert(`Alright, you've gussed it well :)`);
            console.log('Alright, you\'ve gussed it well :)');
            score = score + 1;
    }
}
function giss3(){
    var Q3 = prompt(`Do you think I love coffee?`).toLowerCase();
    console.log(`Do you think I love coffee? ${Q3}.`);
    switch(Q3){
        case 'yes':
        case 'y':
            alert(`Actually, I don't love coffee :)`);
            console.log(`Actually, I don't love coffee :)`);
            break;
        case 'no':
        case 'n':
            alert(`Alright, you've gussed it well :)`);
            console.log(`Alright, you've gussed it well :)`);
            score = score + 1;
    }
}
function giss4(){
    var Q4 = prompt(`Can I solve Sudoku game?`).toLowerCase();
    console.log(`Can I solve Sudoku game? ${Q4}.`);
    switch(Q4){
        case 'yes':
        case 'y':
            alert(`Alright, you've gussed it well :)`);
            console.log(`Alright, you've gussed it well :)`); 
            score = score + 1;
            break;
        case 'no':
        case 'n':
            alert(`Actually, yes I can solve it :)`);
            console.log(`Actually, yes I can solve it :)`);
    }
}
function giss5(){
    var Q5 = prompt(`Can I solve Rubik's Cube?`).toLowerCase();
    console.log(`Can I solve Rubik's Cube? ${Q5}.`);
    switch(Q5){
        case 'yes':
        case 'y':
            alert(`Alright, you've gussed it well :)`);
            console.log(`Alright, you've gussed it well :)`);
            score = score + 1;
            break;
        case 'no':
        case 'n':
            alert(`Actually, yes I can solve it :)`);
            console.log(`Actually, yes I can solve it :)`);
    }
}
// in this Q6 we will give a user attempts of 4 to solve it
function giss6(){
    for (var i = 0; i <= 3; i++) {
        var Q6 = prompt(`Can you giss my age? Let's try :)`).toLowerCase();
        console.log(`Can you giss my age? Let's try :) ${Q6}.`);
        if(Q6 == 23){
            alert(`Alright, my age is: ${Q6}, and you've gussed it well :)`);
            console.log(`Alright,  my age is: ${Q6}, and you've gussed it well :)`);
            score = score + 1;
            break;
        }else if(Q6 > 23){
            alert(`You're too high, try again :)`);
            console.log(`You're too high, try again :)`);
        }else if (Q6 < 23){
            alert(`You're too low, try again :)`);
            console.log(`You're too low, try again :)`);
        }else if(21 < Q6 < 25){
            alert(`You're so close, try again :)`);
            console.log(`You're so close, try again :)`);
        }
    }
}
// in this Q7 we will give a user attempts of 6 to solve it
var dishes = ['yallengi','fettuccini alfredo','shawarma','zinger','fahita','pizza','biryani','kabsa','maqluba','mansaf'];
var newDishes;
function giss7(){
    console.log(i + 1 + ' ' +dishes);
    // var newDishes = [];
    console.log(dishes);
    for(var i = 0; i <=5; i++){
        var Q7 = prompt(`What's my favorate dishes do you think?`).toLowerCase();
        console.log(`What's my favorate dishes do you think? ${Q7}.`);
        newDishes = [];
        newDishes.push(Q7);
        //console.log(newDishes);
        console.log(i + 1 + ' ' + newDishes);
        if(dishes.includes(Q7)){
            alert ('You\'ve gussted it. '+ Q7 +' is one of my favorate dishes :).');
            console.log ('You\'ve gussted it. '+ Q7 +' is one of my favorate dishes :).');
            score = score + 1;
            break;
        }else if(!dishes.includes(Q7)){
            alert('You said '+Q7+', and it\'s not my favorate dish :(. Try again :)');
            console.log('You said '+Q7+', and it\'s not my favorate dish :(. Try again :)');
        }
    }
}
giss1();
giss2();
giss3();
giss4();
giss5();
giss6();
giss7();
alert(`Your last answer wase: ${newDishes}`);
console.log(`Your last answer wase: ${newDishes}`);
alert(`My favorate dishes are: ${dishes}`);
console.log(`My favorate dishes are: ${dishes}`);
var corrictScore = score ;
alert(`Your score is: ${corrictScore} points of 7`);
console.log(`Your score is: ${corrictScore} points of 7`);
alert(`Well done. Thank you very much, ${uName}. I felt fun with you :). Now you can see the information about me :). Have a great time :)`);
console.log(`Well done. Thank you very much, ${uName}. I felt fun with you :). Now you can see the information about me :). Have a great time :)`);

    

