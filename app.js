`use strict`;

// document.querySelector(".button").addEventListener(
//     "click", () => {
//         const input = document.querySelector(".input").value;
//         if (!input) {
//             return
//         }
//         document.querySelector(".panel").innerHTML = input;
//         document.querySelector(".input").value = "";
//         console.log(input)
//     });

function changeClick() {
    const input = document.querySelector(".input").value;
    if (!input) {
        return
    }
    document.querySelector(".panel").innerHTML = input;
    document.querySelector(".input").value = "";
    console.log(input)
}