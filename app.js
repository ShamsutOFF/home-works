function luhnCheck(cardNumber) {
    // 1. Удаляем все нецифровые символы
    const digits = cardNumber.replace(/\D/g, '');

    // 2. Преобразуем строку в массив цифр и разворачиваем
    const numbers = digits.split('').map(Number).reverse();

    // 3. Сумма с учетом алгоритма Луна
    const sum = numbers.reduce((total, digit, index) => {
        // Каждую вторую цифру (начиная с первой после 0) удваиваем
        if (index % 2 === 1) {
            const doubled = digit * 2;
            // Если больше 9 - вычитаем 9 (эквивалентно сложению цифр)
            return total + (doubled > 9 ? doubled - 9 : doubled);
        }
        return total + digit;
    }, 0);

    // 4. Проверяем делимость на 10
    return sum % 10 === 0;
}

// Тесты
console.log(luhnCheck('4561-2612-1234-5467')); // true
console.log(luhnCheck('4561-2612-1234-5464')); // false
console.log(luhnCheck('4111-1111-1111-1111')); // true (тестовый номер Visa)
console.log(luhnCheck('1234-5678-9012-3456')); // false