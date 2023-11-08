function getRootProperty(a,b) {
    for (const key in a) {
        if (Array.isArray(a[key]) && a[key].includes(b)) {
            return key;
        }
    }
    for (const key in a) {
        if (typeof a[key] === "object") {
            const result = getRootProperty(a[key], b);
            if (result !== null) {
                return key;
            }
        }
    }
    return null;
}
const object = {
    one: {
        nest1: {
            val1: [9, 34, 92, 100],
        },
    },
    "2f7": {
        n1: [10, 92, 53, 71],
        n2: [82, 34, 6, 19],
    },
};
console.log(getRootProperty(object, 9));
console.log(getRootProperty(object, 100));
console.log(getRootProperty(object, 53));
console.log(getRootProperty(object, 999));
