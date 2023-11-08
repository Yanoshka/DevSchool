function unpack(truck){
    let a = [];
    let b = 0;


    for (const box of truck) {
        for (const item of box) {
            if (item.startsWith("[") && item.endsWith("]") && item.length % 2 === 0) {
                const sausages = item.slice(1, -1);
                if (sausages.length % 4 === 0) {
                    a.push(...sausages.split("").join(""));
                    b++;
                    if (b === 5) {
                        b = 0;
                    }
                }
            }
        }
    }
        return a.join(" ");
    }

const truck = [
    ["(-)", "[IIII]", "[))))]"],
    ["IuI", "[llll]"],
    ["[@@@@]", "UwU", "[IIII]"],
    ["IuI", "[))))]", "x"],
    []
];

const result = unpack(truck);
console.log(result);


