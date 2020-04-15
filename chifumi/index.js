import {Player} from "./class/Player.js";
import {Computer} from "./class/Computer.js";
import {ShapeFactory} from "./class/ShapeFactory.js";

let player = new Player("ToNo");
let computer = new Computer();
let trace_str = "";
let trace = new Map();

function detectChange() {
    document.querySelector('#player_one_score').textContent = player.score;
    document.querySelector('#player_two_score').textContent = computer.score;

    let traceContrainer = document.querySelector("#trace");
    traceContrainer.innerHTML = trace_str;
    traceContrainer.scrollTop = traceContrainer.scrollHeight;
}

function findWinner() {

    if( player.shape.name === computer.shape.name ){
        return;
    }

    if(player.shape.isWinnerOf(computer.shape)){
        player.win();
        return player.name;
    }

    computer.win();
    return computer.name;
}

window.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#player_one').textContent = player.name;
    document.querySelector('#player_two').textContent = computer.name;

    detectChange();

    document.querySelectorAll(".btn").forEach(elt => {
        elt.addEventListener('click', function () {
            player.shape = ShapeFactory.create(elt.dataset.shape);
            computer.selectShape();
            let winner = findWinner();

            trace_str += (trace_str) ? "<hr />" : "";
            trace_str += "<p>";
            trace_str += `<b class="text-success">${player.name}</b> joue <span class="text-primary">${player.shape.name}</span><br />`;
            trace_str += `<b class="text-success">${computer.name}</b> joue <span class="text-primary">${computer.shape.name}</span><br />`;
            trace_str += (!winner) ? `<b class='text-danger'>Match nul</b>` : `<b class="text-success">${winner}</b> gagne cette manche`;
            trace_str += "</p>";

            let lines = [];
            // [[], []] ??


            detectChange();
        });
    });

});
