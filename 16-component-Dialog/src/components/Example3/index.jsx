import { useState, useCallback } from 'react';
import DialogWithRenderFunction from './DialogWithRenderFunction';
import BaseComponent from '../BaseComponent';

const Example = () => {
  const [show, setShow] = useState(false);
  const atDialogClose = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <section data-name="Example3">
      <button className="my-btn" onClick={() => setShow(true)}>
        Dialog
      </button>

      <DialogWithRenderFunction show={show} onClose={atDialogClose}>
        {(onClose) => {
          return (
            <div className="bg-red p-3">
              <BaseComponent onClose={onClose} />
            </div>
          );
        }}
      </DialogWithRenderFunction>
    </section>
  );
};
export default Example;
