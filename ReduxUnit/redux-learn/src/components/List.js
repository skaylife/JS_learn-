function List(data) {
  console.log('================');
  console.log(data);
  console.log('================');
  return (
    <div>
      <ul>
        {data.goods.map(item =>
          <li key={item.id}>{item.title}
            <br />
            <img src={item.image} className="image" />
          </li>
        )}
      </ul>
    </div>
  )
}

export default List;