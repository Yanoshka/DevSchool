function toversOfHanoi(n) {
    if(n===1){
        return 1;
    }
    return Math.pow(2,n)-1;
}
let n = 7;
let moves = toversOfHanoi(n);
console.log(moves);