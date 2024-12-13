import { ReactSVG } from 'react-svg';

const SVG = ({ className="", src }) => (
  <div className={className}>
    <ReactSVG src={src} />
  </div>
);

export default SVG;
