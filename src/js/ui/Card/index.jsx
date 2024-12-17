const Card = ({ item, onBuy, quantity }) => {
  return (
    <div className="card">
      <div className="card__header">
        <img src={item.url} alt="" />
      </div>
      <div className="card__body">
        <div>{item.price} {item.symbol}</div>
        <div><button onClick={onBuy} className="button">BUY NOW</button></div>
      </div>

      { quantity ? <span className="car--notification">{quantity}</span> : null }
    </div>
  )
};

export default Card;
