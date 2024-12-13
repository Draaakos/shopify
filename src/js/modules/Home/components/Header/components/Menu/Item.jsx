import classNames from "classnames";

const Item = ({ item, isActive }) => {
  const classes = classNames({
    "menu__item": true,
    "menu__item--active": isActive
  })

  return (
    <div className={classes}>
      <a href={item.path}>{item.label}</a>
    </div>
  );
};

export default Item;
