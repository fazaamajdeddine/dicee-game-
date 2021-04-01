
var randomNumber1=Math.floor(Math.random() * 6) + 1;//regenerate a random number between 1 and 6.

//then we're going to use this random number to select a random dice images.
var randomImgDice="dice" + randomNumber1 + ".png";//this will be a string that is from dice1.png through to dice6.png.

var randomImageSource="images/"+randomImgDice;//images/dice1.png to dice6.png.

var random1=document.querySelectorAll("img")[0];//select the tag <img> number one .

random1.setAttribute("src",randomImageSource);//change the source of <img> one to be random when we refresh  

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImgDice2="dice" + randomNumber2 + ".png";

var randomImageSource2="images/"+randomImgDice2;


var random2=document.querySelectorAll("img")[1];//select the tag <img> number two .


random2.setAttribute("src",randomImageSource2);



    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="🚩player 1 wins !";
    }else if(randomNumber1===randomNumber2){
        document.querySelector("h1").innerHTML="draw!";
    }else{
        document.querySelector("h1").innerHTML="player 2 wins !🚩";
    }

