import { useState, useCallback } from 'react';
import Dialog from './Dialog';
import BaseComponent from '../BaseComponent';

const Example = () => {
  const [show, setShow] = useState(false);
  const atDialogClose = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <section data-name="Example1">
      <button className="my-btn" onClick={() => setShow(true)}>
        Dialog
      </button>

      {/* TODO 1 */}
      <Dialog show={show} onClose={atDialogClose}>
        <BaseComponent />
        <BaseComponent />
      </Dialog>
    </section>
  );
};
export default Example;
