import { useDialogContext } from './DialogWithContext/DialogContext';

const UseContextChildExample = () => {
  const { onClose } = useDialogContext();

  return (
    <section data-name="UseContextChildExample" className="m-2">
      <h1>UseContextChildExample</h1>
      <button onClick={onClose}>Close</button>
    </section>
  );
};
export default UseContextChildExample;
