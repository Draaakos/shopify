import classNames from "classnames";
import Button from "ui/Button";
import SVG from "ui/SVG";


const ArrowNavigation = ({ onNext, onPrev, left }) => {
  const classes = classNames({
    'banner-buttons-slider': true,
    'banner-buttons-slider--left': left
  });

  return (
    <div className={classes}>
      <Button small className="swiper-button-prev inverse" onClick={onPrev}>
        <SVG src="/static/images/general/right-arrow.svg" />
      </Button>
      <Button className="swiper-button-next" small primary onClick={onNext}>
        <SVG src="/static/images/general/right-arrow.svg" />
      </Button>
    </div>
  );
};

export default ArrowNavigation;
