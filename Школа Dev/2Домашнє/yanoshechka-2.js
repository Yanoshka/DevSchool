function index(arr){
    const a=arr.length;

for (let i=0; i<a; i++) {
    const left = arr.slice(0, i).reduce((acc, number) => acc + number, 0);
    const right = arr.slice(i + 1).reduce((acc, number) => acc + number, 0);

    if (left === right) {
        return i;
    }
}
return -1;
}
console.log(index([1, 2, 3, 4, 3, 2, 1]));