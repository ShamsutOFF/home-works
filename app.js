const arr = [21,654,546,6,42,8,42,18,69435,198,72,21,8,7423,16,84]

function isEvenNumber (num) {
    return num % 2 === 0;
}

function isOddNumber (num) {
    return num % 2 > 0;
}

function filter(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

console.log(`Массив до фильтрации: ${arr}`)
// console.log(`Массив после фильтрации четных: ${filter(arr, isEvenNumber)}`)
console.log(`Массив после фильтрации не четных: ${filter(arr, isOddNumber)}`)