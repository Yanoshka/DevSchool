function change(n){
    let sort=String(n).split("").sort((a,b) => b - a);
    let result= +sort.join('');
    return result;
}
console.log((change(145263)));