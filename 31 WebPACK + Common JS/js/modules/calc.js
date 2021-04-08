function calc() {
  // Калькулятор калорий

  const result = document.querySelector('.calculating__result');

  let sex, height, weight, age, ratio; // Переменные - пол, рост, вес возраст, и коэфф

  // Условия для проверки значений из LocalStorage / Если они есть записать в LocalStorage, если нет, то поставить по умолчанию
  if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
  } else {
    sex = 'female';
    localStorage.setItem('sex', 'female');
  }

  // Тоже самое только для коэффа - ratio
  if (localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
  } else {
    ratio = 1.375;
    localStorage.setItem('ratio', 1.375);
  }

  // Установка активных значений LocalStorage
  function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    // Проверка из localStorage
    elements.forEach(elem => {
      elem.classList.remove(activeClass);
      if (elem.getAttribute('id') === localStorage.getItem('sex')) {
        elem.classList.add(activeClass);
      }
      if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
        elem.classList.add(activeClass);
      }
    });
  }

  initLocalSettings('#gender div', 'calculating__choose-item_active');
  initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) { // Если хоть одно значение пустое, тогда завершаем функцию 
      result.textContent = '--_--';
      return;
    }

    if (sex === 'female') {
      result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio); // Для женщин
    } else {
      result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio); // Для мужчин
    }
  }

  calcTotal();

  function getStaticInformation(Selector, activeClass) {
    const elements = document.querySelectorAll(Selector); // Получаем все div-ы

    elements.forEach(elem => {
      elem.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-ratio')) {
          ratio = +e.target.getAttribute('data-ratio'); // Кнопки - Низкая активност Невысокая активность Умеренная активность 
          localStorage.setItem('ratio', +e.target.getAttribute('data-ratio')); // Сохраняем значение в LocalStorage
        } else {
          sex = e.target.getAttribute('id');
          localStorage.setItem('sex', e.target.getAttribute('id')); // Сохраняем значение в LocalStorage
        }

        elements.forEach(elem => {
          elem.classList.remove(activeClass);
        });

        e.target.classList.add(activeClass);

        calcTotal();
      });
    });
  }

  getStaticInformation('#gender div', 'calculating__choose-item_active');
  getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

  function getInputInformation(selector) {
    const input = document.querySelector(selector);

    input.addEventListener('input', () => {

      // Подсветка рамки при вводе неправильных данных 
      if (input.value.match(/\D/g)) {
        input.style.border = '1px solid red';
      } else {
        input.style.border = '';
      }

      switch (input.getAttribute('id')) {
        case 'height':
          height = +input.value;
          break;
        case 'weight':
          weight = +input.value;
          break;
        case 'age':
          age = +input.value;
          break;
      }
      calcTotal();
    });


  }

  getInputInformation('#height');
  getInputInformation('#weight');
  getInputInformation('#age');
}

module.exports = calc();