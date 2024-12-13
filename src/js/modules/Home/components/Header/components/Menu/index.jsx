import menuData from './menuData.js';


const Menu = () => {
  const items = menuData
    .map((item, idx) => (
      <div className="header__menu__item" key={`item-${idx}`}>
        <a href={item.path}>{item.label}</a>
      </div>
    ));

  return (
    <div className="header__menu">
      {items}
    </div>
  )
};

export default Menu;
