const input = document.querySelector('input');
const h1 = document.querySelector('h1');

//change only shows when we blur/focus
//input shows live (as we constantly change the input)
// input.addEventListener('change', function (e) {
//     console.log("CASKDJASKJHD")
// })

input.addEventListener('input', function (e) {
    h1.innerText = input.value;
})