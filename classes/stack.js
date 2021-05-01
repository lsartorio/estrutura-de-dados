class Stack {
    constructor() {
        this._init();
    }

    _init() {
        this.count = 0;
        this.items = {};
    }
    
    push(item) {
        this.items[this.count] = item;
        this.count++;
    }

    pop() {
        if(this.size() === 0) return;

        delete this.items[this.count - 1];
        this.count--;
    }

    peek() {
        if(this.isEmpty()) return;

        return this.items[this.count - 1];
    }

    clear() {
        this._init();
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.size() === 0;
    }
}

module.exports = { Stack };