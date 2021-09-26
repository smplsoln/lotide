const findKey = (obj, fn) => {

    for (const key of Object.keys(obj)) {
        const val = obj[key];
        let isFnTrue = fn(val);
        if (isFnTrue) {
            return key;
        }
    }
    return;
}


const key = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
}, x => x.stars === 2);

// console.log({ key });
module.exports = { findKey };