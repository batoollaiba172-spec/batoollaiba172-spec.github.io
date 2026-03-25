let number = Math.floor(Math.random() * 10) + 1;
let tries = 0;

function checkGuess() {
    let guess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");
    let triesText = document.getElementById("tries");

    tries++;

    if (guess > number) {
        message.textContent = "Too high!";
    } else if (guess < number) {
        message.textContent = "Too low!";
    } else {
        message.textContent = "Correct! 🎉";
    }

    triesText.textContent = "Tries: " + tries;
}

function resetGame() {
    number = Math.floor(Math.random() * 10) + 1;
    tries = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("tries").textContent = "";
    document.getElementById("guessInput").value = "";
}
