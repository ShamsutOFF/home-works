const userLanguage = 'de'; // или 'en', 'ru'

switch (userLanguage) {
    case 'en':
        console.log('Hello!');
        break;
    case 'ru':
        console.log('Привет!');
        break;
    case 'de':
        console.log('Guten Tag!');
        break;
    case 'fr':
        console.log('Bonjour!');
        break;
    case 'es':
        console.log('¡Hola!');
        break;
    default:
        console.log('Hello!');
}