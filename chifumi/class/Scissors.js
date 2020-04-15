import {PAPER, SCISSORS} from "./Shape.js";

export class Scissors {

    constructor() {
        this.name = SCISSORS
    }

    isWinnerOf(shape) {
        return shape.name === PAPER
    }

}
