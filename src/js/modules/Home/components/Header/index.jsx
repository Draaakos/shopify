import { useContext, useState } from 'react';
import SVG from 'ui/SVG';
import Modal from 'ui/Modal';
import Menu from './components/Menu/index.jsx';
import Detail from './components/Detail/index.jsx';
import { HomeContext } from '../../context.js';


const Header = () => {
  const [ isActiveCar, setIsActiveCar ] = useState(false);
  const { states } = useContext(HomeContext);

  const modal = isActiveCar ? (
    <Modal onClose={() => setIsActiveCar(false)}>
      <Detail />
    </Modal>
  ) : null;

  return (
    <div className="header">
      { modal }
      <div className="header__promotion">30% Off All Orders Until 4/27</div>
      <div className="header__section">
        <div></div>
        <Menu />
        <div className="header__bag" onClick={() => setIsActiveCar(true)}>
          <SVG src="/static/images/general/bag.svg" />
          { states.car.length ? <span className="header__bag--notification" /> : null }
        </div>
      </div>
    </div>
  );
};

export default Header;
