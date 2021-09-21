// generate random number
var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);
// function to change dice One
function randomRollOne(){
  var newText ="images/dice"+randomNumber1+".png";
  document.querySelector(".img1").setAttribute("src", newText);
}
// function to chnage dice two
function randomRollTwo(){
  var newText2 ="images/dice"+randomNumber2+".png";
  document.querySelector(".img2").setAttribute("src", newText2);
}
// decide winner
function winner(){
    if(randomNumber1>randomNumber2){
      document.querySelector("h1").innerHTML= "PLAYER ONE WINS🚩";
    }
    else if(randomNumber1<randomNumber2){
      document.querySelector("h1").innerHTML= "🚩PLAYER TWO WINS";

    }
    else if(randomNumber1==randomNumber2){
      document.querySelector("h1").innerHTML= "REFRESH AGAIN...";
    }
}

  randomRollOne();
  randomRollTwo();
  winner();
