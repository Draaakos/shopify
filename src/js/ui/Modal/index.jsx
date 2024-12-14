import classNames from "classnames";


const Modal = ({ children, onClose }) => {
  const classes = classNames({
    ['modal__content']: true
  })

  const onCloseModal = () => {
    onClose(false);
  }

  const onClick = (evt) => {
    evt.stopPropagation();
  };

  return (
    <div className="modal" onClick={onCloseModal}>
      <div className={classes} onClick={onClick}>{children}</div>
    </div>
  );
};


export default Modal;
