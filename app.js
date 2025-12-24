const arr = [1, 40, -5, 10, 0];

function sortArray(arr) {
    // Внешний цикл - проходим по всем элементам
    for (let i = 0; i < arr.length; i++) {
        // Внутренний цикл - сравниваем соседние элементы
        for (let j = 0; j < arr.length - 1; j++) {
            // Если текущий элемент больше следующего - меняем местами
            if (arr[j] > arr[j + 1]) {
                // Классический swap (обмен значениями)
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log('Исходный массив:', [1, 40, -5, 10, 0]);
console.log('Отсортированный:', sortArray(arr));