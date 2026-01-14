const startBalance = 12000;
const homePrice = 13500;
const mounts = 24;

let newBalance = startBalance * (1 + 0.07 / 12) ** mounts;

if (newBalance > homePrice) {
    console.log(
        `Congratulations! You can buy the house. Your balance after buy is ${newBalance - homePrice}`
    );
}

let foo = 3 > 2 ? "yes" : "no";