let Vector = function (components) {
    this.components = components;

    this.add = function (other) {
        if (this.components.length !== other.components.length) {
            throw new Error("Vectors must have the same length for addition");
        }

        const result = this.components.map((value, index) => value + other.components[index]);
        return new Vector(result);
    };

    this.subtract = function (other) {
        if (this.components.length !== other.components.length) {
            throw new Error("Vectors must have the same length for subtraction");
        }

        const result = this.components.map((value, index) => value - other.components[index]);
        return new Vector(result);
    };

    this.dot = function (other) {
        if (this.components.length !== other.components.length) {
            throw new Error("Vectors must have the same length for dot product");
        }

        return this.components.reduce((sum, value, index) => sum + value * other.components[index], 0);
    };

    this.norm = function () {
        const sumOfSquares = this.components.reduce((sum, value) => sum + value ** 2, 0);
        return Math.sqrt(sumOfSquares);
    };

    this.toString = function () {
        return `(${this.components.join(',')})`;
    };

    this.equals = function (other) {
        if (this.components.length !== other.components.length) {
            return false;
        }

        return this.components.every((value, index) => value === other.components[index]);
    };
};