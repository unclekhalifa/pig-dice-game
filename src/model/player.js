const utils = require("./utils");

const player = {

    roll: [0, 0],
    score: 0,
    turn: false,
    totalScore: 0,
    playerName: "",
    won: false,

    initialise: function (turn, playerName) {
        this.turn = turn;
        this.playerName = playerName;
    },

    rollDie: function () {
        return Math.floor(Math.random() * 6) + 1;
    },

    rollDice: function () {
        this.roll = [this.rollDie(), this.rollDie()];
    },

    updateScoreStatus: function () {
        const rolledSnakeEyes = this.snakeEyes();
        if (this.roll.includes(1) && !rolledSnakeEyes) {
            this.score = 0;
            this.roll = [0, 0];
            utils.displayAlert(`Oof! ${this.playerName} rolled a 1. Round over`);
            return true;
        } else if (rolledSnakeEyes) {
            this.score = 0;
            this.roll = [0, 0];
            this.totalScore = 0
            utils.displayAlert(`Oof! ${this.playerName} rolled snake eyes. Back to square one :(`);
            return true;
        }

        this.score += this.getTotalRoll();
        this.checkIfWon();
        return false;
    },

    passTurn: function () {
        this.totalScore += this.score;
        this.score = 0;
        this.roll = [0, 0];
        utils.displayAlert(`${this.playerName} has passed turn to the next player`);
    },

    checkIfWon: function () {
        if (this.totalScore >= 100 || this.score >= 100) {
            utils.displayAlert(`${this.playerName} won!`);
            this.won = true;
        }
    },

    resetGame: function () {
        this.roll = [0, 0];
        this.score = 0;
        this.totalScore = 0;
    },

    getTotalRoll: function () {
        return this.roll.reduce((prev, curr) => prev + curr);
    },

    snakeEyes: function () {
        return this.getTotalRoll() === 2;
    }
};

module.exports = player;