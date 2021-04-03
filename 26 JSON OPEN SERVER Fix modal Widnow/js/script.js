document.addEventListener('DOMContentLoaded', () => {

  const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

  //Скрытие контента табов 
  function hideTabContent() {
    tabsContent.forEach(item => {
      item.style.display = 'none';
    });

    // Убрать выделение у табов
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  // Добавляем класс 
  function showTabContent(i = 0) {
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();


  // Функция вызова табов при клике 
  tabsParent.addEventListener('click', (event) => {
    const target = event.target;


    //Проверка условия и перебор циклом
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });


  // Timer 

  const deadline = '2021-4-6';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60) % 24)),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }


  // Для отрисовки 

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateclock, 1000); //Обновление значений на странице 

    updateclock(); // Чтоб не было мигания в верстке

    function updateclock() {
      const t = getTimeRemaining(endtime);

      //Вставка значений в HTML 
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock('.timer', deadline);


  // Модальное окно - NOT WORK 
  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
      // modal.classList.add('show');
      // modal.classList.remove('hide');
      modal.classList.toggle('show');
      document.body.style.overflow = 'hidden';
    });
  })


  modalCloseBtn.addEventListener('click', () => {
    // modal.classList.add('hide');
    // modal.classList.remove('show');
    modal.classList.toggle('show');
    document.body.style.overflow = '';
  });



  // Используем шаблоны для карточек

  class MenuCard {
    constructor(src, alt, title, descr, price, perentSelector, ...classes) { // В конце используется rest оператор
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(perentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');

      // Проверка на отсутствие дефолтного класса menu__item, и установка его [menu__item]
      if (this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }


      element.innerHTML = `
          <img src=${this.src} alt=${this.alt}>
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.descr}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
          </div>
      `;
      // Помещаем перент
      this.parent.append(element);
    }
  }

  new MenuCard(
    "img/tabs/vegy.jpg",
    'Pic',
    "Menu 2222",
    "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet iusto commodi, dolore esse dicta debitis ipsum impedit ",
    9,
    ".menu .container",

  ).render();

  new MenuCard(
    "img/tabs/vegy.jpg",
    'Pic',
    "Menu 2222",
    "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet iusto commodi, dolore esse dicta debitis ipsum impedit ",
    9,
    ".menu .container",
    "menu__item",
    "big"
  ).render();

  new MenuCard(
    "img/tabs/vegy.jpg",
    'Pic',
    "Menu 2222",
    "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet iusto commodi, dolore esse dicta debitis ipsum impedit ",
    9,
    ".menu .container",
    "menu__item",
    "big"
  ).render();

  // Forms | С датой для сервера и без, через JSON 

  // С date для сервера 
  // const forms = document.querySelectorAll('form');

  // const message = { //Текстовое сообщение что все работает
  //   loading: 'Загрузка',
  //   success: 'Спасибо',
  //   failure: 'Что-то пошло не так'
  // };

  // forms.forEach(item => {
  //   postData(item);
  // })

  // function postData(form) {
  //   form.addEventListener('submit', (e) => {
  //     e.preventDefault(); //Отменяем старндартное поведение браузера

  //     const statusMessage = document.createElement('div');
  //     statusMessage.classList.add('status');
  //     statusMessage.textContent = message.loading;
  //     form.append(statusMessage);

  //     const request = new XMLHttpRequest();
  //     request.open('POST', 'server.php');

  //     // request.setRequestHeader('Content', 'multipart/form-data');
  //     const formData = new FormData(form);

  //     request.send(formData);

  //     request.addEventListener('load', () => {
  //       if (request.status === 200) {
  //         console.log(request.response);
  //         statusMessage.textContent = message.success;
  //         form.reset();
  //         setTimeout(() => {
  //           statusMessage.remove();
  //         }, 2000);
  //       } else {
  //         statusMessage.textContent = message.failure;
  //       }
  //     })
  //   });
  // }



  // С JSON отправкой 

  // const forms = document.querySelectorAll('form');
  // const message = {
  //     loading: 'img/form/spinner.svg',
  //     success: 'Спасибо! Скоро мы с вами свяжемся',
  //     failure: 'Что-то пошло не так...'
  // };

  // forms.forEach(item => {
  //     postData(item);
  // });

  // function postData(form) {
  //     form.addEventListener('submit', (e) => {
  //         e.preventDefault();

  //         const request = new XMLHttpRequest();
  //         request.open('POST', 'server.php');
  //         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  //         const formData = new FormData(form);

  //         const object = {};
  //         formData.forEach(function(value, key){
  //             object[key] = value;
  //         });
  //         const json = JSON.stringify(object);

  //         request.send(json);

  //         request.addEventListener('load', () => {
  //             if (request.status === 200) {
  //                 console.log(request.response);
  //                 showThanksModal(message.success);
  //                 statusMessage.remove();
  //                 form.reset();
  //             } else {
  //                 showThanksModal(message.failure);
  //             }
  //         });
  //     });
  // }



  const forms = document.querySelectorAll('form');

  const message = { //Текстовое сообщение что все работает
    loading: 'Загрузка',
    success: 'Спасибо',
    failure: 'Что-то пошло не так'
  };

  forms.forEach(item => {
    postData(item);
  })

  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); //Отменяем старндартное поведение браузера

      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      statusMessage.textContent = message.loading;
      form.append(statusMessage);

      const request = new XMLHttpRequest();
      request.open('POST', 'server.php');

      request.setRequestHeader('Content-type', 'application/json');
      const formData = new FormData(form);

      // Конвертирование в JSON объект

      const object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });
      const json = JSON.stringify(object);

      request.send(json);



      request.addEventListener('load', () => {
        if (request.status === 200) {
          console.log(request.response);
          statusMessage.textContent = message.success;
          form.reset();
          setTimeout(() => {
            statusMessage.remove();
          }, 2000);
        } else {
          statusMessage.textContent = message.failure;
        }
      })
    });
  }


});