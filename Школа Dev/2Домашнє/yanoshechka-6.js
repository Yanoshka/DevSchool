
function Perimeter(arr) {
    const r = arr.length;
    const c = arr[0].length;
    let p = 0;

    for (let i = 0; i<r; i++) {
        for (let j = 0; j < c; j++) {
            if (arr[i][j] === 'X') {

                if (i === 0 || arr[i - 1][j] === 'O') {
                    p++;
                }

                if (i === r - 1 || arr[i + 1][j] === 'O') {
                    p++;
                }

                if (j === 0 || arr[i][j - 1] === 'O') {
                    p++;
                }

                if (j === c - 1 || arr[i][j + 1] === 'O') {
                    p++;
                }
            }
        }
    }

    return `Total land perimeter: ${p}`;
}


const arr1 = [
    'XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO'
];
console.log(Perimeter(arr1));

const arr2 = [
    'XOOO',
    'XOXO',
    'XOXO',
    'OOXX',
    'OOOO'
];
console.log(Perimeter(arr2));
