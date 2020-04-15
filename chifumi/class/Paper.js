import {PAPER, ROCK} from "./Shape.js";

export class Paper {

    constructor() {
        this.name = PAPER
    }

    isWinnerOf(shape) {
        return shape.name === ROCK
    }

}
