
// объвляем 2 переменные, то, что человек вводит с клавиатуры
// inputNum - количество товаров
// inputPrice - количество товаров

//querySelector() - помогает получить элемент, 
//который подходит селектор, указанный в скобках


let inputNum = document.querySelector('.box_number');
let inputPrice = document.querySelector('.box_price');

 //input.value передает нам то число, которое ввел пользователь 

function answer() {
    if(inputNum.value == "" || inputPrice.value == "")
    {
        alert("Вы ввели не все данные")
    }
    else
    {
        if(inputNum.value <0 || inputPrice.value < 0)
        {
            alert("Нельзя вводить отрицательные значения:)")
        }
        else 
        {
            document.querySelector('.box_ans_out').innerHTML = inputNum.value * inputPrice.value;
        }
    }
}

//свойство InnerHTML помогает изменить содержимое элемента
