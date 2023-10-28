const BaseComponent = ({ onClose }) => {
  return (
    <section data-name="BaseComponent" className="m-2">
      <h1>BaseComponent</h1>
      <button onClick={onClose}>Close Dialog</button>
    </section>
  );
};
export default BaseComponent;
