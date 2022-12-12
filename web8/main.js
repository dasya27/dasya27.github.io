let names = document.querySelector('.name');
let email = document.querySelector('.email');
let msg = document.querySelector('.message');


let toPopup = document.querySelector('.btn__popup');  //кнопка на сайт
let body  = document.querySelector('body');
let popup = document.querySelector('.popup');         //попап
let close = document.querySelector('.popup__close');

//сохраняем в local storage 
function save()
{
    localStorage.setItem('Имя', names.value);
    localStorage.setItem('Почта', email.value);
    localStorage.setItem('Сообщение', msg.value);

    //сохраняем значение чекбокса
    localStorage.setItem('Чекбокс', check.value);

    if (check.checked) {
        localStorage.setItem('Чекбокс', 1);
      } 
    else {
        localStorage.setItem('Чекбокс', 0);
      }

}

//восстанавливаем значения
document.addEventListener('DOMContentLoaded', () => {
    names.value = localStorage.getItem('Имя');
    email.value = localStorage.getItem('Почта');
    msg.value = localStorage.getItem('Сообщение');

    let checkBox = localStorage.getItem('Чекбокс');     
    
    if (checkBox == 1) {
        check.checked = true;
    } else if (checkBox == 0) {
        check.checked = false;
    }

    names.oninput = save;
    email.oninput = save;     //когда пользователь будет изменять значения 
    msg.oninput = save; 
    check.oninput = save; 

    //при нажатии открывается попап
    toPopup.addEventListener('click', function()
    {
        window.history.pushState(
        
            {},
            '',
            'feedback.html'
        )

        window.onpopstate = function () {
            window.history.back();
            popup.classList.remove('popup__open');
            body.classList.remove('body__dark');
          };

        history.pushState({ page: 1 }, 'feedback', '?feedback');
        popup.classList.add('popup__open');
        body.classList.add('body__dark');
        //возвращаемся назад при нажатии назад
    
    });

    close.addEventListener('click', function()
    {
        popup.classList.remove('popup__open');
        body.classList.remove('body__dark');
        window.history.back();                     //возвращаемся назад по истории
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

                cb.checked = false;
              }
            },
            error: function (jqxhr, status, errorMsg) {
              alert('Ошибка!');
            },
          });
        });
      });
});
    





