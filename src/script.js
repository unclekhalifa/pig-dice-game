$(() => {

    const $newGameButton = document.getElementById("newGame");

    const $player1RollButton = document.querySelector("#player1 .rollButton");
    const $player2RollButton = document.querySelector("#player2 .rollButton");

    const $player1PassButton = document.querySelector("#player1 .passButton");
    const $player2PassButton = document.querySelector("#player2 .passButton");

    const player1 = {...player};
    player1.initialise(true, "John");

    const player2 = {...player};
    player2.initialise(false, "Jane");

    game.setNames([player1, player2]);

    $newGameButton.addEventListener("click", function () {
        player1.resetGame();
        player2.resetGame();
        game.clearEntries();
    });

    $player1RollButton.addEventListener("click", function () {
        game.handleRoll(player1, "player1");
    });

    $player2RollButton.addEventListener("click", function () {
        game.handleRoll(player2, "player2");
    });

    $player1PassButton.addEventListener("click", function () {
        game.handlePass(player1, "player1");
    });

    $player2PassButton.addEventListener("click", function () {
        game.handlePass(player2, "player2");
    });
});