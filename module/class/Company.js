import {User} from "./User.js";

// Le mot clé default permet de préciser au moment de l'import que l'on souhaitera récupérer cet élément par défaut
export default class Company {
    constructor(name) {
        this.name = name;
    }
}

export class Employe extends User {

    constructor(name) {
        super(name);
    }
}
