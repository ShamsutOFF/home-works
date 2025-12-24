function crypto(password) {
    let result = '';

    for (let i = 0; i < password.length; i += 2) {
        if (i + 1 < password.length) {
            result += password[i + 1] + password[i];
        } else {
            result += password[i];
        }
    }

    return result;
}

function check(encrypted, password) {
    return crypto(password) === encrypted;
}

// Примеры
console.log(crypto('password'));
console.log(crypto('test'));
console.log(check('etts', 'test'));
console.log(check('etts', 'wrong'));
console.log(check(crypto('password'), 'password'));
console.log(check(crypto('password'), 'password2'));