document.addEventListener('DOMContentLoaded', function () {
        let summ = 0;
    let bag = 0;
    let qual = 0;

    fl = 0;

    //переменные, которые проверяют, все ли пользователь отметил

    //Дубай и Португалия - 100 000
    //США и Испания - 80 000
    //Германия - 30 000

    //Багаж 5 000
    //Бизнес класс - 7 000

    //при изменении страны вызывается эта функция и меняется значение суммы

    //обрабатываем именно сумму билета

    let country = document.querySelector('.country');  //получили страну


    //обработчкик события ( страна изменяется )

    country.addEventListener('change', function() {

        fl = 1;
        //убираем поле ответа
        document.querySelector(".box_ans").style.display = "none";

        if(country.value == 1) //Дубай
        {
            summ = 100000;

            //доступен только бизнес класс
            qual = 7000;
            document.querySelector(".only_b").style.display = "flex";
            document.querySelector(".class_wrapper").style.display = "none";

            //доступно только с ручной кладью
            bag = 0;
            document.querySelector(".only_hand").style.display = "flex";
            document.querySelector(".bag_wrapper").style.display = "none";
        }

        if(country.value == 5) // Португалия
        {
            summ = 100000;

            document.querySelector(".only_b").style.display = "none";
            document.querySelector(".class_wrapper").style.display = "flex";

            //доступно только с ручной кладью
            bag = 0;
            document.querySelector(".only_hand").style.display = "flex";
            document.querySelector(".bag_wrapper").style.display = "none";
        }
        
        if(country.value == 2) //Германия
        {
            summ = 30000;

            document.querySelector(".only_b").style.display = "none";
            document.querySelector(".class_wrapper").style.display = "flex";

            document.querySelector(".only_hand").style.display = "none";
            document.querySelector(".bag_wrapper").style.display = "flex";
        }
        if(country.value == 3 || country.value == 4 ) //Испания и США
        {
            summ = 80000;

            //доступен только бизнес
            qual = 7000;

            document.querySelector(".only_b").style.display = "flex";
            document.querySelector(".class_wrapper").style.display = "none";

            document.querySelector(".only_hand").style.display = "none";
            document.querySelector(".bag_wrapper").style.display = "flex";
        }
    })




    let buy = document.querySelector('.btn');  //получаем кнопку

    buy.addEventListener('click', function () {
        
        let n = document.querySelector(".form-control").value;

        //проверяем качество полета
        let quals = document.querySelector(".class-check-b");

        if(quals.checked)
                {
                    qual = 7000;
                }
            else
                {
                    qual = 0;
                }
        
        //обрабатываем багаж
        let bags = document.querySelector(".bag-check-b");

        if(bags.checked)
            bag = 5000;
        else
            bag = 0;
        

        if(fl==1)
        {
            if(n=="")
                alert("Вы ввели не все данные");

            else 
            if(isNaN(n))
                alert("Пожалуйста, только числа");
            else
                if(n > 0)
                {
                    document.querySelector(".box_ans").style.display = "block";

                    summ = (summ + bag + qual)*n;
                    document.querySelector(".answer").innerHTML = "Цена вашей покупки: " + summ;
                    summ = summ/n - bag - qual;
                }
                else
                    alert("Количество товаров не может быть отрицательным");
        }
        else
            alert("Вы ввели не все данные");
                
    })

});
