const randColor = () => {
    return Math.floor(Math.random() * 255);
}


let btn = document.querySelector('button');

btn.addEventListener("click", (e) => {
    let div = document.querySelector('div');
    let h2 = document.querySelector('h2');
    let r = randColor();
    let g = randColor();
    let b = randColor();
    div.style.backgroundColor = `rgb(${r},${g},${b})`;
    h2.innerHTML = `rgb(${r},${g},${b})`;
});


//Practice for Text Editor
// let input = document.querySelector('input');

// input.addEventListener("input", function (e) {
//     let h1 = document.querySelector('h1');
//     let val = "";
//     for (let ch of (input.value)) {
//         if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || ch == " ") {
//             val += (ch);
//         }
//     }
//     console.log(val);
//     h1.innerText = val;
// });

