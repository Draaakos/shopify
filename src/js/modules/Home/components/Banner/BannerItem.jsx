import Button from "ui/Button";
import SVG from "ui/SVG";
import ArrowNavigation from 'ui/ArrowNavigation';


const BannerItem = ({ img, onNext, onPrev }) => {
  return (
    <div className="banner-item">
      <div>
        <div className="title">Lorem ipsum dolor sit amet</div>
        <div className="description">Nunc porttitor tortor metus, nec sagittis lectus accumsan quis. Aenean euismod mollis tempor.</div>

        <div className="banner-buttons">
          <Button text="SHOP NOW" primary>
            <SVG src="/static/images/general/right.svg" />
          </Button>
          <Button text="TAKE THE QUIZ">
            <SVG src="/static/images/general/right.svg" />
          </Button>
        </div>
        <ArrowNavigation onNext={onNext} onPrev={onPrev} />
      </div>
      <div className="image-content">
        <img src={img} alt="banner img"/>
      </div>
    </div>
  );
};

export default BannerItem;
