function calcSum(n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum = sum + i
        }
    }
    return sum;
}

console.log(calcSum(10));