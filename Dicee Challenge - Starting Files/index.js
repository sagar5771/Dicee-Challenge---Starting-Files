var randNumber1 = Math.floor(Math.random() * 6) + 1;
var randImg1="./images/dice" + randNumber1 + ".png";

document.querySelector(".img1").setAttribute("src",randImg1);

var randNumber2 = Math.floor(Math.random() * 6) + 1;
var randImg2="./images/dice" + randNumber2 + ".png";

document.querySelector(".img2").setAttribute("src",randImg2);
if(randNumber1 > randNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins";
}
else if(randNumber1 < randNumber2){
    document.querySelector("h1").innerHTML = "player 2 wins";
}
else{
    document.querySelector("h1").innerHTML= "Draw";
}