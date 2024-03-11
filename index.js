var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomDice = "dice" + randomNumber1 + ".png";
var randomImage = "./" + randomDice;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImage);
var randomNumber2 = Math.floor(Math.random() * 6) +1;
var randomDice2 = "dice" + randomNumber2 + ".png";
var randomImage2 = "./" + randomDice2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "😜 player 1 win";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "😜 player 2 win";
} else {
    document.querySelector("h1").innerHTML = "😫 it's a draw"
}