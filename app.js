const obj = {
    search: `Вася`,
    take: 10,
};

function toQueryString(obj) {
    if (obj) {
        return Object.entries(obj).map(([key, value]) => `${key}=${value}`).join('&');
    }
}

console.log(toQueryString(obj));