document.querySelector("button").addEventListener("click",click);
var c=0,d=0,e=0;
function click(){

var randomNumber1=Math.floor(Math.random()*6) + 1;
var randomNumber2=Math.floor(Math.random()*6) + 1;
var a,b;

if(randomNumber1===1)
{
  a="images/dice1.png";
}
else if(randomNumber1===2)
{
  a="images/dice2.png";
}
else if(randomNumber1===3)
{
  a="images/dice3.png";
}
else if(randomNumber1===4)
{
  a="images/dice4.png";
}
else if(randomNumber1===5)
{
  a="images/dice5.png";
}
else{
  a="images/dice6.png";
}
document.querySelector(".img1").setAttribute("src",a);
if(randomNumber2===1)
{
  b="images/dice1.png";
}
else if(randomNumber2===2)
{
  b="images/dice2.png";
}
else if(randomNumber2===3)
{
  b="images/dice3.png";
}
else if(randomNumber2===4)
{
  b="images/dice4.png";
}
else if(randomNumber2===5)
{
  b="images/dice5.png";
}
else{
  b="images/dice6.png";
}
document.querySelector(".img2").setAttribute("src",b);

if(a>b)
{
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
  document.querySelector("#score1").innerHTML="Score of Player-1 :- "+(++c);
}
else if(b>a){
  document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
  document.querySelector("#score1").innerHTML="Score of Player-2 :- "+(++d);
}
else{
  document.querySelector("h1").innerHTML="Draw!";
  document.querySelector("#score1").innerHTML="Draw Score :- "+(++e);
}
}
