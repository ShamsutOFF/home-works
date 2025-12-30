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
    const obj = {
        text: input
    }
    const textJSON = JSON.stringify(obj);
    localStorage.setItem("text", textJSON);
    console.log(textJSON);
    document.querySelector(".panel").innerHTML = input;
    document.querySelector(".input").value = "";
    // document.querySelector(".notification").style.display = "block";
    // document.querySelector(".notification").classList.add("notification_active");
    // document.querySelector(".notification").classList.remove("notification_hidden");

    // console.log(input)
}

function inputChanged(e) {
    if (e.key === "Enter") submitForm("click");
}


// document.querySelectorAll(".one > span").entries().forEach((item) => {
//     item.forEach((item) => {
//         console.log(item.innerHTML)
//     })
// })
// // console.log(document.getElementsByClassName(`one`));
//
// console.log(document.getElementById(`two`).innerText);
// // console.log(document.querySelector("#two").innerText);
//
// console.log(document.querySelector(`[user-id="4"]`).innerText);