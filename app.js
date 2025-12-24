function crypto(password) {
    const arr = password.split('');
    const result = [];

    for (let i = 0; i < arr.length; i += 4) {
        const group = arr.slice(i, i + 4);
        if (group.length === 4) {
            // console.log(group)
            if (i === 4) {
                // console.log(i)
                // console.log(group)
                // console.log(group[3], group[1], group[2], group[0])
                result.push(group[3], group[1], group[2], group[0]);
            } else {
                result.push(group.reverse().join(''));
            }

        } else {
            result.push(...group);
        }
    }

    return result.join('');
}

function check(encrypted, password) {
    return crypto(password) === encrypted;
}

// Тесты
console.log(crypto('password')); // 'ssapdorw'
console.log(check('ssapdorw', 'password')); // true
console.log(check(crypto('password'), 'password')); // true
console.log(check(crypto('ssapdorw'), 'ssapdorw')); // true
console.log(check('ssapdorw', 'wrong')); // false
