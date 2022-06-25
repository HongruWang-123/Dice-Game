
var ran1 = Math.floor(Math.random()*6)+1;
var ran2 = Math.floor(Math.random()*6)+1;

var img1src = "images/dice" + ran1 + ".png";
var img2src = "images/dice" + ran2 + ".png";


document.querySelectorAll("img")[0].setAttribute("src",img1src);
document.querySelectorAll("img")[1].setAttribute("src",img2src);


if(ran1 > ran2){
    document.querySelector("h1").textContent = "🚩Player1 Wins !";
}
else if(ran1 < ran2){
    document.querySelector("h1").textContent = "Player2 Wins !🚩";
}
else{
    document.querySelector("h1").textContent = "Draw !";
}