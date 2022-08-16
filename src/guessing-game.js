class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.value = this.min + Math.ceil((this.max - this.min) / 2);
        return this.value;
    }

    lower() {
        this.max = this.value;
    }

    greater() {
        this.min = this.value;
    }
}

module.exports = GuessingGame;
