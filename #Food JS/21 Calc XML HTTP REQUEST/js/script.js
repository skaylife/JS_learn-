// XML HTTP REQUESTS

const inputRub = document.querySelector('#rub'),
  inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  //request.open(method, url, async, login, pass); // Сборка настроек
  request.open('GET', 'js/current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  request.addEventListener('load', () => { // Смена состояний событий 
    if (request.status === 200) {
      console.log(request.response);

      const data = JSON.parse(request.response); // Парсим ответ, и переводим в понятный вид.
      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = "Что-то пошло не так";
    }
  });

  // status 404 200 500
  // status text Not Found
  // response - ответ от серавера
  // readyState 0 - 4 ; 4 - Done
});