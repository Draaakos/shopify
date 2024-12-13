import classNames from "classnames";

const Button = ({ children, text, primary, small, className, onClick }) => {
  const classes = classNames({
    [className]: true,
    'button': true,
    'button--primary': primary,
    'button-small': small
  });

  return (
    <button className={classes} onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

export default Button;
