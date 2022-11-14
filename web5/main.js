
document.addEventListener('DOMContentLoaded', function () {
    // объвляем 2 переменные, то, что человек вводит с клавиатуры
    // inputNum - количество товаров
    // inputPrice - цена товара

    //querySelector() - помогает получить элемент, 
    //который подходит селектор, указанный в скобках


    let ans = document.querySelector('.box_btn');

    //обработчики событий

    ans.addEventListener("click", function(){

        let inputNum = document.querySelector('.box_number');  //количество товара
        let inputPrice = document.querySelector('.box_price');  //цена товара

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
                if(isNaN(inputNum.value) || isNaN(inputPrice.value))
                {
                    alert("Только числа, пожалуйста");
                }
                else
                {
                    document.querySelector('.box_ans_out').innerHTML = inputNum.value * inputPrice.value;
                    console.log(inputNum.value * inputPrice.value);
                }
        }
    });

    //свойство InnerHTML помогает изменить содержимое элемента
});
