let inputNum = document.querySelector('.box_number');
let inputPrice = document.querySelector('.box_price');

let button = document.querySelector('.box_btn');

button.onclick = function() {
    console.log(inputNum.value * inputPrice.value);
    document.getElementById("box_ans_out").innerHTML = inputNum.value * inputPrice.value;
}