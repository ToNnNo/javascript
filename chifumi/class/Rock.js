import {ROCK, SCISSORS} from "./Shape.js";

export class Rock {

    constructor() {
        this.name = ROCK
    }

    isWinnerOf(shape) {
        return shape.name === SCISSORS
    }

}
