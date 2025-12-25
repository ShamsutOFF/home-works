const dates = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function filterAndFormatDates(arr) {
    return arr
        // Фильтруем строки, которые похожи на дату
        .filter(dateStr => {
            // Проверяем формат: либо dd-mm-yyyy, либо dd/mm/yyyy
            const dateRegex = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/;
            return dateRegex.test(dateStr);
        })
        // Преобразуем строки в объекты дат и фильтруем валидные
        .map(dateStr => {
            // Меняем слэши на дефисы для единообразия
            const normalized = dateStr.replace(/\//g, '-');
            const [day, month, year] = normalized.split('-').map(Number);

            // Проверяем валидность даты
            const date = new Date(year, month - 1, day); // месяц 0-based в JS!

            // Проверяем, что дата корректна и компоненты совпадают
            return date.getFullYear() === year &&
            date.getMonth() === month - 1 &&
            date.getDate() === day ?
                { day, month, year } : null;
        })
        // Убираем невалидные даты
        .filter(dateObj => dateObj !== null)
        // Форматируем в нужный вид
        .map(({ day, month, year }) => {
            // Добавляем ведущие нули и форматируем
            return `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
        });
}

console.log(filterAndFormatDates(dates));
// Результат: ['10-02-2022', '12-11-2023']