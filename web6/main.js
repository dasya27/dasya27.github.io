
let summ = 0;

let course;

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
function getCourse()
{
    course = document.querySelector(".box_select");

    document.querySelector(".box_ans").style.display = "none";
    fl=1;

    console.log(course.value);
    if(course.value == 1 || course.value == 5) //Дубай и Португалия
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
    if(course.value == 2) //Германия
    {
        summ = 30000;

        document.querySelector(".only_b").style.display = "none";
        document.querySelector(".class_wrapper").style.display = "flex";

        document.querySelector(".only_hand").style.display = "none";
        document.querySelector(".bag_wrapper").style.display = "flex";
    }
    if(course.value == 3 || course.value == 4 ) //Испания и США
    {
        summ = 80000;

        //доступен только бизнес
        qual = 7000;

        document.querySelector(".only_b").style.display = "flex";
        document.querySelector(".class_wrapper").style.display = "none";

        document.querySelector(".only_hand").style.display = "none";
        document.querySelector(".bag_wrapper").style.display = "flex";
    }
}

//обрабатываем качество полета
//по умолчанию эконом класс


function getBag()
{
    if(document.querySelector(".bag-check-b").checked)
        bag = 5000;
    else
        bag = 0;
}

function getQual()
{
    if(document.querySelector(".class-check-b").checked)
        qual = 7000;
    else
        qual = 0;
}



function buy()
{
    let n = document.querySelector(".form-control").value;
    console.log(n);
    
    if(n !="" && fl == 1)
    {
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
    {
        alert("Вы ввели не все данные");
    }
}
