import React from 'react';
import ReactDOM from 'react-dom';
import { DialogContext } from './DialogContext';

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

  // TODO 改由 Context Provider
  const providerValue = React.useMemo(() => {
    return {
      onClose,
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <DialogContext.Provider value={providerValue}>
      <dialog className="modal-backdrop" onClick={atBackdropClick} open={show}>
        <div className="modal-dialog">
          <div className="modal-content">
            <button className="modal-close" onClick={onClose}>
              X
            </button>
            {children}
          </div>
        </div>
      </dialog>
    </DialogContext.Provider>,
    modalRoot,
  );
};
export default Dialog;
