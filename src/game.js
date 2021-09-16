const game = {
    clearEntries: function () {
        for (let i = 1; i <= 2; i ++) {
            document.querySelector(`#player${i} .rollTotal`).innerHTML = "";
            document.querySelector(`#player${i} .totalScore`).innerHTML = "";
            document.querySelector(`#player${i} .singleRoll`).innerHTML = "";
        }
    },

    handleRoll: function (player, playerName) {
        player.rollDice();
        player.updateScoreStatus();
        document.querySelector(`#${playerName} .rollTotal`).innerHTML = player.score;
        document.querySelector(`#${playerName} .singleRoll`).innerHTML = player.getTotalRoll();
    },

    handlePass: function(player, playerName) {
        player.passTurn();
        document.querySelector(`#${playerName} .totalScore`).innerHTML = player.totalScore;
        document.querySelector(`#${playerName} .rollTotal`).innerHTML = "";
        document.querySelector(`#${playerName} .singleRoll`).innerHTML = "";
        player.checkIfWon();
    },

    setNames: function (players) {
        for (const [index, player] of Object.entries(players)) {
            document.querySelector(`#player${parseInt(index) + 1} .name`).innerHTML = player.playerName;
        }
    }
};

try {
    module.exports = game;
} catch (e) {}