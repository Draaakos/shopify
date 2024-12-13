import Button from "ui/Button";
import SVG from "ui/SVG";


const ArrowNavigation = ({ onNext, onPrev }) => {
  return (
    <div className="banner-buttons-slider">
      <Button small className="inverse" onClick={onPrev}>
        <SVG src="/static/images/general/right-arrow.svg" />
      </Button>
      <Button small primary onClick={onNext}>
        <SVG src="/static/images/general/right-arrow.svg" />
      </Button>
    </div>
  );
};

export default ArrowNavigation;
