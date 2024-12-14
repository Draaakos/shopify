import classNames from "classnames";

const Button = ({ children, text, primary, small, className, onClick, dynamic }) => {
  const classes = classNames({
    [className]: true,
    'button': true,
    'button--primary': primary,
    'button-small': small,
    'button-dinamic': dynamic
  });

  return (
    <button className={classes} onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

export default Button;
