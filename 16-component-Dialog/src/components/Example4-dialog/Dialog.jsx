/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './Dialog.module.scss';

const getModalRoot = () => {
  let modalRoot = document.getElementById('modal-root');
  if (modalRoot) {
    return modalRoot;
  }
  modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);
  return modalRoot;
};

const Dialog = (props) => {
  const { open, onClose, children } = props;
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const dialogRef = useRef();

  const atClose = useCallback(() => {
    onCloseRef.current?.();
  }, []);

  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [open, atClose]);

  const atDialogSelfClick = useCallback(
    (e) => {
      if (e.currentTarget === e.target) {
        atClose();
      }
    },
    [atClose],
  );

  return createPortal(
    <dialog
      className={styles.dialog}
      ref={dialogRef}
      onClick={atDialogSelfClick}
    >
      <div>{children}</div>
      <div>
        <button className="my-btn" onClick={onClose}>
          Confirm
        </button>
      </div>
    </dialog>,
    getModalRoot(),
  );
};

export default Dialog;
