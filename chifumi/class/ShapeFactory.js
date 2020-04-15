import * as Shape from "./Shape.js";
import {Rock} from "./Rock.js";
import {Paper} from "./Paper.js";
import {Scissors} from "./Scissors.js";

export class ShapeFactory {

    static create(name){
        let shape = null;
        switch (name) {
            case Shape.ROCK:
                shape = new Rock();
                break;
            case Shape.PAPER:
                shape = new Paper();
                break;
            case Shape.SCISSORS:
                shape = new Scissors();
                break;
            default:
                throw new Error(`Class Shape "${name}" not found`);
        }

        return shape;
    }

}
