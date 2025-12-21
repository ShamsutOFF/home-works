const addressLat = 10;
const addressLong = 10;
const positionLat = 20;
const positionLong = 20;

// Просто разница между координатами
const distance = Math.sqrt(
    (addressLat - positionLat) ** 2 +
    (addressLong - positionLong) ** 2
);

console.log(`Расстояние: ${distance}`);