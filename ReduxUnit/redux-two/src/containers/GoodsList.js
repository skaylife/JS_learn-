import { useSelector, useDispatch } from 'react-redux'; // импорт useSelector для обращения к redux хранилищю и useDispatch - посылаем команду на выполнение како либо метода из redusers, goodsSlice
import { selectGoods } from '../store/goodsSlice'; //импортируем гетер из goodsSlice для получения данных из хранилища

import Goods from '../components/Goods'; //импортируем компонент Goods
import { increment } from '../store/cartSlice'; // подключаем инкремент из cartSlice


function GoodsList() {
  const goods = useSelector(selectGoods); //используя useSelector, указываем какие данные получаем из хранилища
  const dispatch = useDispatch(); // сокращаем метод dispatch


  let clickHandler = (event) => {
    event.preventDefault()
    let t = event.target;
    if (!t.classList.contains('add-to-cart')) return true; //проверка или кликнули по кнопке
    dispatch(increment(t.getAttribute('data-key'))) // через dispatch передаем инкременту параметр - атрибут data-key, который указан на кнопке в котором лежит артикул товара

  }


  // перебираем масив, преобразуя item в структуру компонента Goods и передаем в него пропсы.
  return (

    <div className='goods-field' onClick={clickHandler}>
      {goods.map(item => <Goods title={item.title} cost={item.cost} image={item.image} articul={item.articul} key={item.articul} />)}

    </div>

  )
}

export default GoodsList;