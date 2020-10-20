export default class Cell {
    constructor(size, x, y, state) {
        this.size = size;
        this.x = x;
        this.y = y;
        this.state = state;
    }

    getSize() {
        return this.size;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getState() {
        return this.state;
    }

    setState(newState) {
        this.state = newState;
    }
}
