function largestRadialSum(arr,d){
    const n = arr.length;
    let maxNum = 0;

    for(let first = 0; first<d; first++){
        let currentNum=0;
        for (let i = first; i<n; i+=d){
            currentNum+=arr[i];
        }
        maxNum = Math.max(maxNum, currentNum);

    }
    return maxNum;
}
const honor = [1, 2, 3, 4];
const a = 2;
console.log(largestRadialSum(honor, a));