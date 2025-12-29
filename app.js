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

// document.querySelector(".input").addEventListener(
//     "keydown", (e) => {
//         if (e.key === "Enter") submitForm("click");
//         // console.log(e.key)
//     });

function submitForm() {
    const input = document.querySelector(".input").value;
    if (!input) {
        return
    }
    document.querySelector(".panel").innerHTML = input;
    document.querySelector(".input").value = "";
    console.log(input)
}

function inputChanged(e) {
    if (e.key === "Enter") submitForm("click");
}