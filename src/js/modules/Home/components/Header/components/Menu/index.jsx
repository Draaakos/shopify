import { useState } from 'react';
import menuData from './menuData.js';
import Item from './Item.jsx';




const Menu = () => {
  const [ pageActive, setPageActive ] = useState(0)

  const items = menuData
    .map((item, idx) => (
      <Item key={`item-${idx}`} isActive={idx == pageActive} item={item} />
    )
  );

  return (
    <div className="menu">
      {items}
    </div>
  )
};

export default Menu;
