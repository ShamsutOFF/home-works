function convertCurrency(amount, from, to) {
    // Самые простые курсы
    const rates = {
        'RUB_USD': 0.011,
        'RUB_EUR': 0.010,
        'USD_RUB': 90,
        'USD_EUR': 0.91,
        'EUR_RUB': 100,
        'EUR_USD': 1.10
    };

    if (from === to) return amount;

    const rateKey = from + '_' + to;
    return rates[rateKey] ? amount * rates[rateKey] : null;
}