const arr = [
    1, 1, 3, 5, 7, 6, 8, 5, 6, 4,
    7, 1, 1, 2, 1, 6, 8, 9, 5,
];

obj = {};
let el,
    max = 0;
for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) obj[arr[i]] = 1;
    else obj[arr[i]]++;
}

for (const i in obj) {
    if (max < obj[i]) {
        max = obj[i];
        el = i;
    }
}

console.log("The most occured element is: " + el);