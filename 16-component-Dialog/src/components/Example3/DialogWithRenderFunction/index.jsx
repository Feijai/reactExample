import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

/* type DialogProps = {
  show: boolean,
  onClose: () => void,
  children: React.ReactNode | ((closeHandler: () => void) => React.JSX.Element),
}; */

const Dialog = (props) => {
  const { show, onClose, children } = props;

  const atBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  // TODO children 支援 render function
  let child = children;
  if (typeof children === 'function') {
    child = children(onClose);
  }

  return ReactDOM.createPortal(
    <dialog className="modal-backdrop" onClick={atBackdropClick} open={show}>
      <div className="modal-dialog">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            X
          </button>
          {child}
        </div>
      </div>
    </dialog>,
    modalRoot,
  );
};
export default Dialog;
