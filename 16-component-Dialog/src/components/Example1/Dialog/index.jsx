import React from 'react';
import ReactDOM from 'react-dom';
import './Dialog.scss';

// TODO
const modalRoot = document.getElementById('modal-root');

/* type DialogProps = {
  show: boolean,
  onClose: () => void,
  children: React.ReactNode,
}; */

const Dialog = (props) => {
  const { show, onClose, children } = props;

  const atBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };
  // TODO
  const childrenWithProps = React.Children.map(children, (child) => {
    const childProps = { onClose };
    return React.cloneElement(child, childProps);
  });
  return ReactDOM.createPortal(
    <dialog className="modal-backdrop" onClick={atBackdropClick} open={show}>
      <div className="modal-dialog">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            X
          </button>
          {childrenWithProps}
        </div>
      </div>
    </dialog>,
    modalRoot,
  );
};
export default Dialog;
