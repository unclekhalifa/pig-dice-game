const player = {

    roll: [0, 0],
    score: 0,
    turn: false,
    totalScore: 0,
    playerName: "",

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
        return false;
    },

    passTurn: function () {
        this.totalScore += this.score;
        this.score = 0;
        this.roll = [0, 0];
        utils.displayAlert(`${this.playerName} has passed turn`);
    },

    checkIfWon: function () {
        if (this.totalScore >= 100) utils.displayAlert(`${this.playerName} won!`);
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

const utils = {
    displayAlert: function (message) {
        try {
            alert(message);
        } catch (error) {
            console.log(message);
        }
    }
};

try {
    module.exports = player;
} catch (e) {}