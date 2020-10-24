import * as p5 from './p5';
import {States} from "./states";
import CellMatrix from "./CellMatrix";

let s = (sk) => {

    let minRows = 30;
    let minColumns = 50;

    let cellSize = 20;

    let matrix = new CellMatrix(minRows, minColumns);

    let turn = 0;

    sk.setup = () => {
        sk.createCanvas(1000, 720);

        matrix.initMatrix(cellSize);

        matrix.each(cell => cell.setState(randomState()))

        function randomState() {
            return Math.floor(Math.random() * 10) > 5 ? States.DEAD : States.ALIVE;
        }

        sk.frameRate(1);
        sk.colorMode(sk.RGB);
    }


    sk.draw = () => {
        turn++;
        console.log("TURN " + turn);
        drawBoard();
        advance_game();
    }

    function drawBoard() {
        matrix.each(cell => {
            sk.noStroke();

            let state = cell.getState();
            if (state === States.DEAD) {
                sk.fill(255, 255, 255);
            } else if (state === States.ALIVE) {
                sk.fill(0, 0, 0);
            }
            sk.square(cell.getX(), cell.getY(), cell.getSize());
        })
    }

    function advance_game() {
        let newMatrix = new CellMatrix(matrix.getRows(), matrix.getColumns())
        newMatrix.initMatrix(cellSize)

        matrix.eachWithIndexs((cell, i, j) => {
            let neighbours = matrix.aliveNeighbours(i, j);
            if (cell.getState() === States.ALIVE) {
                if (neighbours === 2 || neighbours === 3)
                    newMatrix.get(i, j).setState(States.ALIVE);
            } else {
                if (neighbours === 3)
                    newMatrix.get(i, j).setState(States.ALIVE);
            }
        })
        matrix = newMatrix;
    }
}

const main = new p5(s);

