const dates = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function filterAndFormatDates(arr) {
    return arr
        // Фильтруем строки, которые похожи на дату
        .filter(dateStr => {
            // Проверяем формат: либо dd-mm-yyyy, либо dd/mm/yyyy
            const dateRegex = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/;
            return dateRegex.test(dateStr);
        })
        // Форматируем даты в нужный формат
        .map(dateStr => {
            // Меняем слэши на дефисы для единообразия
            const normalized = dateStr.replace(/\//g, '-');
            console.log(normalized);
            const [day, month, year] = normalized.split('-').map(Number);
            if (year < 1000 || day > 31 || month > 12) {
                return null;
            }
            return normalized;
        })
        .filter(Boolean);
}

console.log(filterAndFormatDates(dates));