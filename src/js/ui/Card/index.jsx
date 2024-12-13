const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card__header">
        <img src={item.url} alt="" />
      </div>
      <div className="card__body">
        <div>{item.price}</div>
        <div><button className="button">BUY NOW</button></div>
      </div>
    </div>
  )
};

export default Card;
