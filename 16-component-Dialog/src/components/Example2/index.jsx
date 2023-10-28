import { useState, useCallback } from 'react';
import DialogWithContext from './DialogWithContext';
import UseContextChildExample from './UseContextChildExample';

const Example = () => {
  const [show, setShow] = useState(false);
  const atDialogClose = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <section data-name="Example2">
      <button className="my-btn" onClick={() => setShow(true)}>
        Dialog
      </button>

      {/* TODO 2 */}
      <DialogWithContext show={show} onClose={atDialogClose}>
        <div>
          <UseContextChildExample />
        </div>
      </DialogWithContext>
    </section>
  );
};
export default Example;
