import {Player} from "./Player.js";
import * as Shape from "./Shape.js";
import {ShapeFactory} from "./ShapeFactory.js";

export class Computer extends Player {

    constructor() {
        super("Computer");
    }

    selectShape() {
        let shapes = [Shape.ROCK, Shape.PAPER, Shape.SCISSORS];
        let rand = Math.floor( Math.random() * 3 );

        this.shape = ShapeFactory.create(shapes[rand]);
    }
}
