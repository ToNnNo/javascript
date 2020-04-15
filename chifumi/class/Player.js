export class Player {

    constructor(name, score = 0) {
        this.name = name;
        this.score = score;
        this.shape = null;
    }

    win() {
        this.score++;
    }
}
