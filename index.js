class GuessingGame {
    constructor() {
    	this.min = null;
    	this.max = null;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	return Math.round(this.min + (this.max - this.min)/2)
    }

    lower() {
    	this.max = this.guess();
    }

    greater() {
    	this.min = this.guess();
    }
}
const number = 409;
        const game = new GuessingGame();

        game.setRange(0, 385)

        let result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
console.log(result)


