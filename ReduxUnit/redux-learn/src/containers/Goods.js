import { useDispatch } from "react-redux";
import { addGoods } from "../action";

const Goods = () => {

  const dispatch = useDispatch();

  const formHabdler = (event) => {
    event.preventDefault();
    console.log(event.target.elements);
    let data = event.target.elements;
    dispatch(addGoods(data.id.valuem, data.title.value, data.image.value));
  }

  return (
    <div>
      <form onSubmit={formHabdler}>
        <div>
          <input type="text" name="id" defaultValue="345345" />
        </div>
        <div>
          <input type="text" name="title" defaultValue="Ноутбук Apple MacBook Air 13 Late 2020" />
        </div>
        <div>
          <input type="text" name="image" defaultValue="https://avatars.mds.yandex.net/get-mpic/4944925/img_id5544713746159542779.jpeg/orig" />
        </div>
        <div>
          <button type="submit">Add new goods</button>
        </div>
      </form>
    </div>
  )
}

export default Goods;