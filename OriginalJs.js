

function playgame() {

    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    var imgLocation1 =  "images/dice" + randomNumber1 + ".png";
    
    document.querySelector(".img1").setAttribute("src", imgLocation1);

    var randomNumber2 = Math.floor((Math.random() * 6) + 1);
    var imgLocation2 =  "images/dice" + randomNumber2 + ".png";

    document.querySelector(".img2").setAttribute("src", imgLocation2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins🚩";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
    }
    else {
        document.querySelector("h1").innerHTML = "🚩Draw🚩";
    }

}