class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.middle = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return (this.middle = Math.ceil((this.min + this.max) * 0.5));
    }

    lower() {
        this.max = this.middle;
    }

    greater() {
        this.min = this.middle;
    }
}

module.exports = GuessingGame;