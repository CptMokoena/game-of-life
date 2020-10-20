import Cell from "./cell";
import {States} from "./states";

export default class CellMatrix {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;

        this.matrix = [];

        for (let i = -1; i <= rows; i++)
            this.matrix[i] = new Array(columns + 2);
    }

    initMatrix(cellSize) {
        for (let i = -1; i <= this.rows; i++)
            for (let j = -1; j <= this.columns; j++)
                this.matrix[i][j] = new Cell(cellSize, j*cellSize, i*cellSize, States.DEAD);
    }

    get(i, j) {
        return this.matrix[i][j];
    }

    each(callback) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                callback(this.matrix[i][j])
            }
        }
    }

    neighbours(i, j) {
        let neighbours = [];
        for (let a = i-1; a <=i+1;i++)
            for (let b = j-1; b <= j+1; j++)
                if (a != i || b != j)
                    neighbours.push(this.matrix[i][j])
    }
}
