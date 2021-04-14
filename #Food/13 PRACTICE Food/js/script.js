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
});