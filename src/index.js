import Cell from './cell';
import * as p5 from './p5';
import {States} from "./states";
import CellMatrix from "./matrix";

let s = (sk) => {

    let minRows = 30;
    let minColumns = 50;

    let cellSize = 20;

    let matrix = new CellMatrix(minRows, minColumns);

    let turn = 0;

    sk.setup = () => {
        sk.createCanvas(1000, 720);
        sk.background(153);

        matrix.initMatrix(cellSize);

        matrix.each(cell => cell.setState(randomState()))

        function randomState() {
            return Math.floor(Math.random() * 10) > 5 ? States.DEAD : States.ALIVE;
        }

        sk.frameRate(2);
        sk.colorMode(sk.RGB);
    }


    sk.draw = () => {
        turn++;
        console.log("TURN " + turn);
        drawBoard()

        if (turn == 1) {
            sk.noLoop();
        }
    }

    function drawBoard() {
        matrix.each(cell => {
            sk.noStroke();

            let state = cell.getState();
            if (state === States.DEAD) {
                sk.fill(255, 255, 255);
            } else if (state === States.ALIVE) {
                sk.fill(0,0,0);
            }
            sk.square(cell.getX(), cell.getY(), cell.getSize());
        })
    }
}

const main = new p5(s);

