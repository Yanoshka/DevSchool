function highAndLow(n){
    let array= n.split(" ").map(Number);
    let NumMin= Math.min.apply(null,array);
    let NumMax = Math.max.apply(null,array);
    return NumMax+ " " + NumMin;
}
console.log(highAndLow("3 575 29 -27 -356"));