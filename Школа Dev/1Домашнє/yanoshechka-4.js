 function isPrime(n){
    let result = true;
if(n<2){
    return false;
}
else if (n===2){
    return true;
}
if (n%2===1){
    for(let i=2;n>i;i++){
        if(n%i===0){
            return false;

}
    }
}
else{
    return false;
}
return result;
}
console.log(isPrime(13));