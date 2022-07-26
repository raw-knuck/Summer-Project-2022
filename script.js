
//Challenge 1
function ageindays(){
    var Birthyear=prompt("Please enter the year you were born in");
    var ageindayss= (2022-Birthyear)*365;
    var h1=document.createElement("h1");
    var answerstorage=document.createTextNode("Your age in days is "+ ageindayss);
    h1.setAttribute('id','AgeInDays'); //changing id of the h1 element
    h1.appendChild(answerstorage);
    //console.log(ageindayss);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('AgeInDays').remove();

}

//Challenge 2
function generatecat(){
    var image= document.createElement('img');
    var div= document.getElementById("flex-cat-gen");
    image.src='https://cdn2.thecatapi.com/images/8f.gif';
    div.appendChild(image);
}

//Challenge 3: rock,paper,scissors
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;

    //message= finalMessage(results);

    botChoice= numberToChoice(randtoRpsInt());
    console.log('Computer Choice', botChoice);

    results=decideWinner(humanChoice,botChoice);
    console.log(results);

    message=finalMessage(results);
    console.log(message);

    rpsFrontEnd(yourChoice.id,botChoice,message);

}


function randtoRpsInt(){

    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock','paper','scissor'][number];
}


function decideWinner(yourChoice, computerChoice){

    var rpsDatabase = {
        'rock': {'scissors':1,'rock':0.5,'paper':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0}
    };

    var yourScore=rpsDatabase[yourChoice][computerChoice];
    var computerScore=rpsDatabase[computerChoice][yourChoice];

    return [yourScore,computerScore];
}


function finalMessage([yourScore,computerScore]){
    if(yourScore==0){
        return {'message': 'You lost', 'color': 'red'};
    }

    else if(yourScore==1){
        return {'message': 'You won!', 'color':'green'};
    }

    else{
        return {'message': 'You drew!', 'color':'blue'};
    }
}

    function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){

        var imagesDatabase={
            'rock':document.getElementById('rock').src,
            'scissor':document.getElementById('scissors').src,
            'paper': document.getElementById('paper').src

        }

        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();

        var humanDiv=createElement('div');
        var botDiv=createElement('div');
        var messageDiv=createElement('div');

        humanDiv.innerHTML="<img src='"+imagesDatabase[humanImageChoice] + "'>"

        document.getElementById('flex-box-rps-div').appendChild(humanDiv);


    }
