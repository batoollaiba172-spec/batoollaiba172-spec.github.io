
let number = Math.floor(Math.random() * 10) + 1;
let tries = 0;
function checkGuess() {
    const guessInput = document.getElementById("guess");
    const message = document.getElementById("message");
    const triesText = document.getElementById("tries");

    const guess = Number(guessInput.value);

    
    if (!guess || guess < 1 || guess > 10) {
        message.textContent = "Please enter a number between 1 and 10.";
        return;
    }

    tries++;

    if (guess > number) {
        message.textContent = "Too high!";
    } else if (guess < number) {
        message.textContent = "Too low!";
    } else {
        message.textContent = `Correct! 🎉 You guessed it in ${tries} tries.`;
    }

    triesText.textContent = "Tries: " + tries;
}
function resetGame() {
    number = Math.floor(Math.random() * 10) + 1;
    tries = 0;

    document.getElementById("guess").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("tries").textContent = "";
}
