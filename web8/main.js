let names = document.querySelector('.name');
let email = document.querySelector('.email');            //получаем переменные
let msg = document.querySelector('.message');


let toPopup = document.querySelector('.btn__popup');      //кнопка на сайт
let popup__bg  = document.querySelector('.popup__bg');    //фон попапа
let popup = document.querySelector('.popup');             //попап
let close = document.querySelector('.popup__close');      //крестик

//сохраняем в local storage 
function save()
{
    localStorage.setItem('Имя', names.value);       
    localStorage.setItem('Почта', email.value);      //сохраняем ключ - значение
    localStorage.setItem('Сообщение', msg.value);

    //сохраняем значение чекбокса
    if (check.checked) {
        localStorage.setItem('Чекбокс', 1);
      } 
    else {
        localStorage.setItem('Чекбокс', 0);
      }

}

//восстанавливаем значения
//это происходит после загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    
    names.value = localStorage.getItem('Имя');
    email.value = localStorage.getItem('Почта');       //достаем из localStorage значения
    msg.value = localStorage.getItem('Сообщение');     //устанавливаем их на места

    let checkBox = localStorage.getItem('Чекбокс');     
    
    if (checkBox == 1) 
    {
        check.checked = true;                 //восстанавливаем чек-бокс
    } 
    else if (checkBox == 0) {
        check.checked = false;
    }

    names.oninput = save;
    email.oninput = save;     //если пользователь будет изменять значения 
    msg.oninput = save;       //все изменения сохранятся
    check.oninput = save; 

    //при нажатии на кнопку открывается попап
    toPopup.addEventListener('click', function()
    {

        //реагирут на нажатие назад-вперед
        window.onpopstate = function () {
            window.history.back();                //возвращаемся назад
            popup.classList.remove('popup__open');
            popup__bg.classList.remove('popup__bg__open');
          };

        history.pushState({ page: 1 }, 'modal', '?modal');      //меняем URL

        popup.classList.add('popup__open');
        popup__bg.classList.add('popup__bg__open');
    
    });

    close.addEventListener('click', function()   //реагирует на нажатие крестика
    {
      window.history.back();                     //возвращаемся назад по истории  
      popup.classList.remove('popup__open');
      popup__bg.classList.remove('popup__bg__open');
    }
    );

    //отправляем форму на сервер
    $(function () {
        $('#form').submit(function (e) {            //происходит при клике на форму
          e.preventDefault();
          $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'https://formcarry.com/s/U1_4O8sQsWN',   //адрес нашего сервера
            data: $(this).serialize(),
            success: function (response) {
              if (response.status == 'success') 
              {
                alert('Успешно!');

                localStorage.removeItem('Имя');
                localStorage.removeItem('Почта');         //удаляем все из хринилища
                localStorage.removeItem('Сообщение');
                localStorage.removeItem('Чекбокс');

                names.value = localStorage.getItem('Имя');
                email.value = localStorage.getItem('Почта');     //обнуляем все
                msg.value = localStorage.getItem('Сообщение');

                check.checked = false;
              }
            },
            error: function (jqxhr, status, errorMsg) {
              alert('Ошибка!');
            },
          });
        });
      });
});
    





