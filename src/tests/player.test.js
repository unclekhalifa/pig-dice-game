const player = require("../player");

describe("Tests to check player functionality", () => {

    test("Should initialise player with expected settings", () => {
        const player1 = {...player};
        player1.initialise(true, "Marvin");

        expect(player1.roll).toEqual([0, 0]);
        expect(player1.score).toBe(0);
        expect(player1.turn).toBe(true);
        expect(player1.totalScore).toBe(0);
        expect(player1.playerName).toBe("Marvin");
    });

    test("Should set round to be over when user rolls single one", () => {
        const player1 = {...player};
        player1.initialise(true, "Kurt");

        player1.roll = [1, 5];
        player1.updateScoreStatus();

        expect(player1.score).toBe(0);
    });

    test("Should set snakeEyes to true when user rolls snake eyes", () => {
        const player1 = {...player};
        player1.initialise(true, "Geiger");

        player1.roll = [1, 1];
        player1.updateScoreStatus();

        expect(player1.score).toBe(0);
        expect(player1.totalScore).toBe(0);
    });

    test("Should set score to 69 when user rolls a 9", () => {
        const player1 = {...player};
        player1.initialise();
        player1.score = 60;

        player1.roll = [5, 4];
        player1.updateScoreStatus();

        expect(player1.score).toBe(69);
        expect(player1.totalScore).toBe(0); // No existing score yet
    });
});