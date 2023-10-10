let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function newGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("attempt-count").textContent = attempts;

    document.getElementById("result").textContent = "";
    //reset the input field
    document.getElementById("guess-input").value = "";
    //enable the input field
    document.getElementById("guess-input").removeAttribute("disabled");
}




function checkGuess() {
    const guessInput = document.getElementById("guess-input");
    const guess = parseInt(guessInput.value);



    attempts++;
    document.getElementById("attempt-count").textContent = attempts;

    if (guess === targetNumber) {
        document.getElementById("result").textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
        document.getElementById("result").style.color = "green";
        guessInput.setAttribute("disabled", "true");

    } else {
        //hot cold
        //find the difference between guess and target
        const difference = Math.abs(targetNumber - guess);
        let message = "";
        let color = "";
        if (difference > 30) {
            message = "Ice cold";
            color = "blue";
        } else if (difference > 20) {
            message = "Cold";
            color = "lightblue";
        } else if (difference > 10) {
            message = "Warm";
            color = "#fc9920";
        } else if (difference > 5) {
            message = "Hot";
            color = "#f46607";
        } else {
            message = "Very hot";
            color = "red";
        }
        document.getElementById("result").style.color = color;

        document.getElementById("result").textContent = message;
    }

    guessInput.value = "";
    guessInput.focus();
}
